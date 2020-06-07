export interface IItemsProps {
  selected?: boolean;
}

export interface Items {
  id: number;
  image: string;
  title: string;
  createdAt: Date;
  updatedAt: string;
  image_url: string;
}

export interface ILoadingProps {
  color: string;
  size: number;
}
