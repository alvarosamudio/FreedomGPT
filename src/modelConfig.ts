export type Model = {
  config: {
    FILEPATH: string | null;
    model: string;
    downloadURL: string;
    requiredRAM: number;
    fileSize: number;
    id: string;
  };
};

const models: Model[] = [
  {
    config: {
      FILEPATH: localStorage.getItem("alpaca-7B") || null,
      model: "alpaca-7B-fast",
      downloadURL:
        "https://huggingface.co/bhattaraijay05/Alpaca-7B/resolve/main/ggml-alpaca-7b-q4.bin",
      requiredRAM: 6,
      fileSize: 4,
      id: "alpaca-7B-fast",
    },
  },
  {
    config: {
      FILEPATH: localStorage.getItem("alpaca-7B") || null,
      model: "alpaca-7B-full",
      downloadURL:
        "https://huggingface.co/bhattaraijay05/Alpaca-7B/resolve/main/ggml-alpaca-7b-q4.bin",
      requiredRAM: 6,
      fileSize: 4,
      id: "alpaca-7B-full",
    },
  },
  {
    config: {
      FILEPATH: localStorage.getItem("llama-7B") || null,
      model: "llama-7B-fast",
      downloadURL:
        "https://huggingface.co/bhattaraijay05/llama-7B/resolve/main/ggml-model-q4_0.bin",
      requiredRAM: 6,
      fileSize: 4,
      id: "llama-7B-fast",
    },
  },
  {
    config: {
      FILEPATH: localStorage.getItem("llama-7B") || null,
      model: "llama-7B-full",
      downloadURL:
        "https://huggingface.co/bhattaraijay05/llama-7B/resolve/main/ggml-model-q4_0.bin",
      requiredRAM: 6,
      fileSize: 4,
      id: "llama-7B-full",
    },
  },
  {
    config: {
      FILEPATH: localStorage.getItem("vicuna-7B-full") || null,
      model: "vicuna-7B-delta-v1.1-full",
      downloadURL:
        "https://huggingface.co/lmsys/vicuna-7b-delta-v1.1/resolve/main/pytorch_model-00001-of-00002.bin",
      requiredRAM: 6,
      fileSize: 10,
      id: "vicuna-7B-delta-v1.1-full",
    },
  },
  {
    config: {
      FILEPATH: localStorage.getItem("vicuna-7B") || null,
      model: "vicuna-7B-delta-v1.1",
      downloadURL:
        "https://huggingface.co/lmsys/vicuna-7b-delta-v1.1/resolve/main/pytorch_model-00002-of-00002.bin",
      requiredRAM: 6,
      fileSize: 4,
      id: "vicuna-7B-delta-v1.1",
    },
  },
  {
    config: {
      FILEPATH: localStorage.getItem("falcon-7B") || null,
      model: "falcon-7B",
      downloadURL:
        "https://huggingface.co/tiiuae/falcon-7b/resolve/main/pytorch_model-00001-of-00002.bin",
      requiredRAM: 6,
      fileSize: 4,
      id: "falcon-7B",
    },
  },
];

export default models;
