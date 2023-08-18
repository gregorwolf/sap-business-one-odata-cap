/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ProfitCentersApi } from './ProfitCentersApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { Dimensions, DimensionsType } from './Dimensions';
import { CostCenterTypes, CostCenterTypesType } from './CostCenterTypes';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';

/**
 * This class represents the entity "ProfitCenters" of service "SAPB1".
 */
export class ProfitCenters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProfitCentersType<T>
{
  /**
   * Technical entity name for ProfitCenters.
   */
  static _entityName = 'ProfitCenters';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ProfitCenters entity
   */
  static _keys = ['CenterCode'];
  /**
   * Center Code.
   */
  centerCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Center Name.
   * @nullable
   */
  centerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Which Dimension.
   * @nullable
   */
  inWhichDimension?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cost Center Type.
   * @nullable
   */
  costCenterType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Effective To.
   * @nullable
   */
  effectiveTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * Center Owner.
   * @nullable
   */
  centerOwner?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link Dimensions} entity.
   */
  dimension?: Dimensions<T> | null;
  /**
   * One-to-one navigation property to the {@link CostCenterTypes} entity.
   */
  costCenterType2?: CostCenterTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-many navigation property to the {@link EmployeesInfo} entity.
   */
  employeesInfo!: EmployeesInfo<T>[];

  constructor(readonly _entityApi: ProfitCentersApi<T>) {
    super(_entityApi);
  }
}

export interface ProfitCentersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  centerCode: DeserializedType<T, 'Edm.String'>;
  centerName?: DeserializedType<T, 'Edm.String'> | null;
  groupCode?: DeserializedType<T, 'Edm.String'> | null;
  inWhichDimension?: DeserializedType<T, 'Edm.Int32'> | null;
  costCenterType?: DeserializedType<T, 'Edm.String'> | null;
  effectiveFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  effectiveTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  active?: BoYesNoEnum | null;
  centerOwner?: DeserializedType<T, 'Edm.Int32'> | null;
  dimension?: DimensionsType<T> | null;
  costCenterType2?: CostCenterTypesType<T> | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  employeesInfo: EmployeesInfoType<T>[];
}
