require 'yaml'

def generate_talks(yaml_file_path)
  data = load_data_from_file(yaml_file_path)
  data = track_num_to_name(data)

  mtime = [yaml_file_path, 'layouts/talk.html'].collect{|f| File.mtime(f)}.max

  data[:talks].each do |talk|
    @items << Nanoc3::Item.new("<%= render 'talk', talk: #{talk} %>",
                                {title: "Italian Ruby Day | #{talk[:title]}", priority: '0.6'},
                                "/talks/#{talk[:id]}/",
                                mtime: mtime)
  end
end

private
def load_data_from_file(yaml_file_path)
  content = File.open(yaml_file_path) {|f| f.read}
  return YAML::load(content)
end

def track_num_to_name(data)
  data[:talks].each do |talk|
    talk[:track] = data[:tracks][talk.delete(:track_num)]
  end
  return data
end
