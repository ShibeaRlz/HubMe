package dao

import (
	"context"
	"github.com/jphacks/os_2403/domain/models"
	"gorm.io/gorm"
)

type TagClickHistoryRepository struct {
	db *gorm.DB
}

func NewTagClickHistory(db *gorm.DB) *TagClickHistoryRepository {
	return &TagClickHistoryRepository{
		db: db,
	}
}

func (r *TagClickHistoryRepository) Create(ctx context.Context, tagClickHistory *models.TagClickHistory) error {
	return r.db.WithContext(ctx).Create(tagClickHistory).Error
}

func (r *TagClickHistoryRepository) FindByUUID(ctx context.Context, uuid string) ([]models.TagClickHistory, error) {
	var tagClickHistories []models.TagClickHistory
	if err := r.db.WithContext(ctx).Where("uuid = ?", uuid).Find(&tagClickHistories).Error; err != nil {
		return nil, err
	}
	return tagClickHistories, nil
}
