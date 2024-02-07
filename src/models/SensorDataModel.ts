import { ModelAttributes, DataTypes } from "sequelize";

export const SensorDataModel: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Device: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Timestamp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  MAC: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ForceX: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  ForceY: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  ForceZ: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  Temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
};
