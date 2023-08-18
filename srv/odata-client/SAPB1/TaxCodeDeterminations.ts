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
import type { TaxCodeDeterminationsApi } from './TaxCodeDeterminationsApi';
import { BoTcdDocumentTypeEnum } from './BoTcdDocumentTypeEnum';
import { BoBusinessAreaEnum } from './BoBusinessAreaEnum';
import { BoTcdConditionEnum } from './BoTcdConditionEnum';

/**
 * This class represents the entity "TaxCodeDeterminations" of service "SAPB1".
 */
export class TaxCodeDeterminations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxCodeDeterminationsType<T>
{
  /**
   * Technical entity name for TaxCodeDeterminations.
   */
  static _entityName = 'TaxCodeDeterminations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TaxCodeDeterminations entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: BoTcdDocumentTypeEnum | null;
  /**
   * Business Area.
   * @nullable
   */
  businessArea?: BoBusinessAreaEnum | null;
  /**
   * Condition 1.
   * @nullable
   */
  condition1?: BoTcdConditionEnum | null;
  /**
   * Udf Table 1.
   * @nullable
   */
  udfTable1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Value 1.
   * @nullable
   */
  numberValue1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * String Value 1.
   * @nullable
   */
  stringValue1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Money Value 1.
   * @nullable
   */
  moneyValue1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Condition 2.
   * @nullable
   */
  condition2?: BoTcdConditionEnum | null;
  /**
   * Udf Table 2.
   * @nullable
   */
  udfTable2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Value 2.
   * @nullable
   */
  numberValue2?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * String Value 2.
   * @nullable
   */
  stringValue2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Money Value 2.
   * @nullable
   */
  moneyValue2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Condition 3.
   * @nullable
   */
  condition3?: BoTcdConditionEnum | null;
  /**
   * Udf Table 3.
   * @nullable
   */
  udfTable3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Value 3.
   * @nullable
   */
  numberValue3?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * String Value 3.
   * @nullable
   */
  stringValue3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Money Value 3.
   * @nullable
   */
  moneyValue3?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Condition 4.
   * @nullable
   */
  condition4?: BoTcdConditionEnum | null;
  /**
   * Udf Table 4.
   * @nullable
   */
  udfTable4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Value 4.
   * @nullable
   */
  numberValue4?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * String Value 4.
   * @nullable
   */
  stringValue4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Money Value 4.
   * @nullable
   */
  moneyValue4?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Condition 5.
   * @nullable
   */
  condition5?: BoTcdConditionEnum | null;
  /**
   * Udf Table 5.
   * @nullable
   */
  udfTable5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Value 5.
   * @nullable
   */
  numberValue5?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * String Value 5.
   * @nullable
   */
  stringValue5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Money Value 5.
   * @nullable
   */
  moneyValue5?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Row Tax.
   * @nullable
   */
  freightRowTax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Header Tax.
   * @nullable
   */
  freightHeaderTax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Udf Alias 1.
   * @nullable
   */
  udfAlias1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Udf Alias 2.
   * @nullable
   */
  udfAlias2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Udf Alias 3.
   * @nullable
   */
  udfAlias3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Udf Alias 4.
   * @nullable
   */
  udfAlias4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Udf Alias 5.
   * @nullable
   */
  udfAlias5?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: TaxCodeDeterminationsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxCodeDeterminationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  lineNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  documentType?: BoTcdDocumentTypeEnum | null;
  businessArea?: BoBusinessAreaEnum | null;
  condition1?: BoTcdConditionEnum | null;
  udfTable1?: DeserializedType<T, 'Edm.String'> | null;
  numberValue1?: DeserializedType<T, 'Edm.Int32'> | null;
  stringValue1?: DeserializedType<T, 'Edm.String'> | null;
  moneyValue1?: DeserializedType<T, 'Edm.Double'> | null;
  condition2?: BoTcdConditionEnum | null;
  udfTable2?: DeserializedType<T, 'Edm.String'> | null;
  numberValue2?: DeserializedType<T, 'Edm.Int32'> | null;
  stringValue2?: DeserializedType<T, 'Edm.String'> | null;
  moneyValue2?: DeserializedType<T, 'Edm.Double'> | null;
  condition3?: BoTcdConditionEnum | null;
  udfTable3?: DeserializedType<T, 'Edm.String'> | null;
  numberValue3?: DeserializedType<T, 'Edm.Int32'> | null;
  stringValue3?: DeserializedType<T, 'Edm.String'> | null;
  moneyValue3?: DeserializedType<T, 'Edm.Double'> | null;
  condition4?: BoTcdConditionEnum | null;
  udfTable4?: DeserializedType<T, 'Edm.String'> | null;
  numberValue4?: DeserializedType<T, 'Edm.Int32'> | null;
  stringValue4?: DeserializedType<T, 'Edm.String'> | null;
  moneyValue4?: DeserializedType<T, 'Edm.Double'> | null;
  condition5?: BoTcdConditionEnum | null;
  udfTable5?: DeserializedType<T, 'Edm.String'> | null;
  numberValue5?: DeserializedType<T, 'Edm.Int32'> | null;
  stringValue5?: DeserializedType<T, 'Edm.String'> | null;
  moneyValue5?: DeserializedType<T, 'Edm.Double'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  freightRowTax?: DeserializedType<T, 'Edm.String'> | null;
  freightHeaderTax?: DeserializedType<T, 'Edm.String'> | null;
  udfAlias1?: DeserializedType<T, 'Edm.String'> | null;
  udfAlias2?: DeserializedType<T, 'Edm.String'> | null;
  udfAlias3?: DeserializedType<T, 'Edm.String'> | null;
  udfAlias4?: DeserializedType<T, 'Edm.String'> | null;
  udfAlias5?: DeserializedType<T, 'Edm.String'> | null;
}
