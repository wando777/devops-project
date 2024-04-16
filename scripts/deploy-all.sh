#!/bin/bash

# Array contendo os nomes dos arquivos YAML
files=(mysql-deploy.yml geekshopping-deploy.yml prometheus.yml grafana.yml)

# Loop através de cada arquivo no array e aplicar usando kubectl apply
for file in "${files[@]}"; do
  kubectl apply -f "$file"
done