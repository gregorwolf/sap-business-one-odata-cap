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
import { WtdEffectiveDate } from './WtdEffectiveDate';
import { Wtdbp } from './Wtdbp';
import { WtdItem } from './WtdItem';
import { WtdFreight } from './WtdFreight';
import type { WitholdingTaxDefinitionApi } from './WitholdingTaxDefinitionApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { WithholdingTaxCodeCategoryEnum } from './WithholdingTaxCodeCategoryEnum';
import { WithholdingTaxCodeBaseTypeEnum } from './WithholdingTaxCodeBaseTypeEnum';

/**
 * This class represents the entity "WitholdingTaxDefinition" of service "SAPB1".
 */
export class WitholdingTaxDefinition<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WitholdingTaxDefinitionType<T>
{
  /**
   * Technical entity name for WitholdingTaxDefinition.
   */
  static _entityName = 'WitholdingTaxDefinition';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WitholdingTaxDefinition entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * W Tax Name.
   * @nullable
   */
  wTaxName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formula Id.
   * @nullable
   */
  formulaId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum | null;
  /**
   * Official Code.
   * @nullable
   */
  officialCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  category?: WithholdingTaxCodeCategoryEnum | null;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: WithholdingTaxCodeBaseTypeEnum | null;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Min Amount.
   * @nullable
   */
  minAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Base Amount Prct.
   * @nullable
   */
  baseAmountPrct?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sliding Scale Progressive Tax.
   * @nullable
   */
  slidingScaleProgressiveTax?: BoYesNoEnum | null;
  /**
   * Calculate In Automatic Cm.
   * @nullable
   */
  calculateInAutomaticCm?: BoYesNoEnum | null;
  /**
   * Wtd Effective Date Collection.
   * @nullable
   */
  wtdEffectiveDateCollection?: WtdEffectiveDate<T>[] | null;
  /**
   * Wtdbp Collection.
   * @nullable
   */
  wtdbpCollection?: Wtdbp<T>[] | null;
  /**
   * Wtd Item Collection.
   * @nullable
   */
  wtdItemCollection?: WtdItem<T>[] | null;
  /**
   * Wtd Freight Collection.
   * @nullable
   */
  wtdFreightCollection?: WtdFreight<T>[] | null;

  constructor(readonly _entityApi: WitholdingTaxDefinitionApi<T>) {
    super(_entityApi);
  }
}

export interface WitholdingTaxDefinitionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  wTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  wTaxName?: DeserializedType<T, 'Edm.String'> | null;
  formulaId?: DeserializedType<T, 'Edm.Int32'> | null;
  inactive?: BoYesNoEnum | null;
  officialCode?: DeserializedType<T, 'Edm.String'> | null;
  category?: WithholdingTaxCodeCategoryEnum | null;
  baseType?: WithholdingTaxCodeBaseTypeEnum | null;
  type?: DeserializedType<T, 'Edm.Int32'> | null;
  minAmount?: DeserializedType<T, 'Edm.Double'> | null;
  baseAmountPrct?: DeserializedType<T, 'Edm.Double'> | null;
  slidingScaleProgressiveTax?: BoYesNoEnum | null;
  calculateInAutomaticCm?: BoYesNoEnum | null;
  wtdEffectiveDateCollection?: WtdEffectiveDate<T>[] | null;
  wtdbpCollection?: Wtdbp<T>[] | null;
  wtdItemCollection?: WtdItem<T>[] | null;
  wtdFreightCollection?: WtdFreight<T>[] | null;
}
