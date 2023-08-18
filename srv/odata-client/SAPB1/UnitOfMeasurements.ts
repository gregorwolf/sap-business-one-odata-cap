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
import type { UnitOfMeasurementsApi } from './UnitOfMeasurementsApi';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { Items, ItemsType } from './Items';
import { BinLocations, BinLocationsType } from './BinLocations';
import { BarCodes, BarCodesType } from './BarCodes';
import {
  UnitOfMeasurementGroups,
  UnitOfMeasurementGroupsType
} from './UnitOfMeasurementGroups';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';

/**
 * This class represents the entity "UnitOfMeasurements" of service "SAPB1".
 */
export class UnitOfMeasurements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UnitOfMeasurementsType<T>
{
  /**
   * Technical entity name for UnitOfMeasurements.
   */
  static _entityName = 'UnitOfMeasurements';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the UnitOfMeasurements entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Length 1.
   * @nullable
   */
  length1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Length 1 Unit.
   * @nullable
   */
  length1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Length 2.
   * @nullable
   */
  length2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Length 2 Unit.
   * @nullable
   */
  length2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Width 1.
   * @nullable
   */
  width1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Width 1 Unit.
   * @nullable
   */
  width1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Width 2.
   * @nullable
   */
  width2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Width 2 Unit.
   * @nullable
   */
  width2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Height 1.
   * @nullable
   */
  height1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Height 1 Unit.
   * @nullable
   */
  height1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Height 2.
   * @nullable
   */
  height2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Height 2 Unit.
   * @nullable
   */
  height2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Volume.
   * @nullable
   */
  volume?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Volume Unit.
   * @nullable
   */
  volumeUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Weight 1.
   * @nullable
   */
  weight1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Weight 1 Unit.
   * @nullable
   */
  weight1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Weight 2.
   * @nullable
   */
  weight2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Weight 2 Unit.
   * @nullable
   */
  weight2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * International Symbol.
   * @nullable
   */
  internationalSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ewb Unit Entry.
   * @nullable
   */
  ewbUnitEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Pp Weight 1.
   * @nullable
   */
  ppWeight1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Pp We 1 Unit.
   * @nullable
   */
  ppWe1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Pp Weight 2.
   * @nullable
   */
  ppWeight2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Pp We 2 Unit.
   * @nullable
   */
  ppWe2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link ItemGroups} entity.
   */
  itemGroups!: ItemGroups<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link BinLocations} entity.
   */
  binLocations!: BinLocations<T>[];
  /**
   * One-to-many navigation property to the {@link BarCodes} entity.
   */
  barCodes!: BarCodes<T>[];
  /**
   * One-to-many navigation property to the {@link UnitOfMeasurementGroups} entity.
   */
  unitOfMeasurementGroups!: UnitOfMeasurementGroups<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrders} entity.
   */
  productionOrders!: ProductionOrders<T>[];

  constructor(readonly _entityApi: UnitOfMeasurementsApi<T>) {
    super(_entityApi);
  }
}

export interface UnitOfMeasurementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  length1?: DeserializedType<T, 'Edm.Double'> | null;
  length1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  length2?: DeserializedType<T, 'Edm.Double'> | null;
  length2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  width1?: DeserializedType<T, 'Edm.Double'> | null;
  width1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  width2?: DeserializedType<T, 'Edm.Double'> | null;
  width2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  height1?: DeserializedType<T, 'Edm.Double'> | null;
  height1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  height2?: DeserializedType<T, 'Edm.Double'> | null;
  height2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  volume?: DeserializedType<T, 'Edm.Double'> | null;
  volumeUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  weight1?: DeserializedType<T, 'Edm.Double'> | null;
  weight1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  weight2?: DeserializedType<T, 'Edm.Double'> | null;
  weight2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  internationalSymbol?: DeserializedType<T, 'Edm.String'> | null;
  ewbUnitEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  ppWeight1?: DeserializedType<T, 'Edm.Double'> | null;
  ppWe1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  ppWeight2?: DeserializedType<T, 'Edm.Double'> | null;
  ppWe2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  itemGroups: ItemGroupsType<T>[];
  items: ItemsType<T>[];
  binLocations: BinLocationsType<T>[];
  barCodes: BarCodesType<T>[];
  unitOfMeasurementGroups: UnitOfMeasurementGroupsType<T>[];
  productionOrders: ProductionOrdersType<T>[];
}
