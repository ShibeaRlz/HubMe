package gpt

const (
	Role_User = "user"
)

const (
	Initial_Instruction = "あなたは、ユーザーから与えられたタグ一覧と入力タグと今までに選んだタグ一覧に基づいて、入力タグ以外のタグをユーザーが以前に選んだタグや入力タグに類似する3つのタグを提案するアシスタントです。出力はタグ名のみをコンマで区切って記載し、他の文章は一切出力しないでください。"
	Tag_list            = "タグ一覧: "
	Tag_In              = "入力タグ: "
	Tag_Clicked         = "今までに選んだタグ一覧: "
)

type ThreadRequest struct {
	Messages []Message `json:"messages,omitempty"`
}

type Message struct {
	Role    string      `json:"role"`
	Content interface{} `json:"content"`
}
