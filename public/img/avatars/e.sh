#!/bin/zsh

# Create directory to store profile pictures
mkdir -p profile_pics

# Function to download and convert images to webp
download_and_convert() {
  local username=$1
  local url=$2

  echo "Processing ${username}..."

  if [[ -n "$url" ]]; then
    # Generate temp file name
    temp_file=$(mktemp)

    # Download the image
    if curl -sL "$url" -o "$temp_file"; then
      # Convert to webp
      if magick "$temp_file" "profile_pics/${username}.webp"; then
        echo "Converted ${username}'s image to webp."
      else
        echo "Failed to convert ${username}'s image to webp."
      fi
    else
      echo "Failed to download ${username}'s image. Skipping."
    fi

    # Remove temp file
    rm -f "$temp_file"
  else
    echo "No image URL for ${username}. Skipping."
  fi
}

# Data from CSV (username, URL)
data=(
  "ashton https://cdn.discordapp.com/attachments/1243797044137824336/1297226099775770726/new_pfp.png?ex=67152773&is=6713d5f3&hm=655eaabbaeb10412984f202e9b7c0209f69a670bab2ac6d1eaa6a97ac3dba2f5"
  "chris https://pbs.twimg.com/profile_images/1843561336992636928/n8fbayow_400x400.jpg"
  "vt https://cdn.discordapp.com/attachments/683450771207094280/1297277373703524453/logo.jpeg?ex=67155734&is=671405b4&hm=6adfec7dc19a53d5525d161fe89422a666d49450d2f8322b9f5a5b45abc9be34"
  "pygoz https://www.luminescence.capital/images/team/pygoz.jpg"
  "vode https://i.imgur.com/5bwcriy.jpeg"
  "darklord https://pbs.twimg.com/profile_images/1846659895992438784/en2san5s_400x400.jpg"
  "jsavvv https://cdn.discordapp.com/attachments/1204480093091794984/1297233977781915708/bw_rumble_howard.gif?ex=67152ec9&is=6713dd49&hm=291348685f1dccdef9d35aca618c99567288025089eed09a60a70f972cba499a&"
  "aaronw https://cdn.discordapp.com/avatars/944308414639665213/faf50a3e74084b93473948c19d498d70.webp?size=300"
  "treebrother https://cdn.discordapp.com/avatars/200091123106971648/e7dd4a56ca9bb9f8b4f5fb87d1ef3893.webp?size=160"
  "dsr https://cdn.discordapp.com/avatars/964334123135160360/921c2ca76f05c70618d4656efbc068bc.webp?size=160"
  "goonboycrypto "
  "jene https://cdn.discordapp.com/avatars/745016633541787735/60c6a0bffc245dc2ea0b331ce8f5d84d.webp?size=480"
  "j-u-l-1-3-n https://cdn.discordapp.com/avatars/131564165436407808/aaf5e143f2c1e89f4446c1b9dd21e737.webp?size=160"
  "ltforever https://media.discordapp.net/attachments/1198237485566799876/1297459522578939924/img_20240610_132936.jpg?ex=671bef97&is=671a9e17&hm=e81504fe04499dcaa0c5faecdeb8a355b47f0e26b2ac493a82a05ff371d0df68&=&format=webp&width=460&height=612"
  "nick-nach-o "
  "caixas4697 https://cdn.discordapp.com/attachments/1297224662597501029/1298179094005022751/img_3759.png?ex=67189eff&is=67174d7f&hm=c1ddb51cedeebbd6b522a74ebc0858bc5bd6a2e0cc39c5781a75a9b12f22bacc&"
  "havanzalo https://cdn.discordapp.com/avatars/744281559774789663/c20928d3c976c5292408dba477d2ae72.webp?size=100"
  "bonoboooo "
  "scryptoure "
  "thebecketlist "
  "slightedged https://cdn.discordapp.com/attachments/1298258194879086612/1298258322167828552/img_2989.jpeg?ex=671c3488&is=671ae308&hm=5f1e6dc443d6654c4f7a30c99f05a3f2596d69ee7243abe24c0a7bbc8f57ba11&"
)

# Iterate over each entry in the data array
for entry in "${data[@]}"; do
  username=$(echo $entry | cut -d' ' -f1)
  url=$(echo $entry | cut -d' ' -f2-)

  download_and_convert $username $url
done
