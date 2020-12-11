/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KpIsRequestBuilder } from './KpIsRequestBuilder';
import { KpiItemLine } from './KpiItemLine';
import { KpiTypeEnum } from './KpiTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "KPIs" of service "SAPB1".
 */
export class KpIs extends EntityV4 implements KpIsType {
  /**
   * Technical entity name for KpIs.
   */
  static _entityName = 'KPIs';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Kpi Code.
   * @nullable
   */
  kpiCode?: string;
  /**
   * Kpi Name.
   * @nullable
   */
  kpiName?: string;
  /**
   * Kpi Type.
   * @nullable
   */
  kpiType?: KpiTypeEnum;
  /**
   * Number Of Columns.
   * @nullable
   */
  numberOfColumns?: number;
  /**
   * Kpi Item Lines.
   * @nullable
   */
  kpiItemLines?: KpiItemLine[];

  /**
   * Returns an entity builder to construct instances of `KpIs`.
   * @returns A builder that constructs instances of entity type `KpIs`.
   */
  static builder(): EntityBuilderType<KpIs, KpIsType> {
    return EntityV4.entityBuilder(KpIs);
  }

  /**
   * Returns a request builder to construct requests for operations on the `KpIs` entity type.
   * @returns A `KpIs` request builder.
   */
  static requestBuilder(): KpIsRequestBuilder {
    return new KpIsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `KpIs`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `KpIs`.
   */
  static customField(fieldName: string): CustomFieldV4<KpIs> {
    return EntityV4.customFieldSelector(fieldName, KpIs);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface KpIsType {
  kpiCode?: string | null;
  kpiName?: string | null;
  kpiType?: KpiTypeEnum | null;
  numberOfColumns?: number | null;
  kpiItemLines?: KpiItemLine[] | null;
}

export namespace KpIs {
  /**
   * Static representation of the [[kpiCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KPI_CODE: StringField<KpIs> = new StringField('KPICode', KpIs, 'Edm.String');
  /**
   * Static representation of the [[kpiName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KPI_NAME: StringField<KpIs> = new StringField('KPIName', KpIs, 'Edm.String');
  /**
   * Static representation of the [[kpiType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KPI_TYPE: EnumField<KpIs> = new EnumField('KPIType', KpIs);
  /**
   * Static representation of the [[numberOfColumns]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_COLUMNS: NumberField<KpIs> = new NumberField('NumberOfColumns', KpIs, 'Edm.Int32');
  /**
   * Static representation of the [[kpiItemLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KPI_ITEM_LINES: CollectionField<KpIs, KpiItemLine> = new CollectionField('KPI_ItemLines', KpIs, KpiItemLine);
  /**
   * All fields of the KpIs entity.
   */
  export const _allFields: Array<StringField<KpIs> | EnumField<KpIs> | NumberField<KpIs> | CollectionField<KpIs, KpiItemLine>> = [
    KpIs.KPI_CODE,
    KpIs.KPI_NAME,
    KpIs.KPI_TYPE,
    KpIs.NUMBER_OF_COLUMNS,
    KpIs.KPI_ITEM_LINES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<KpIs> = new AllFields('*', KpIs);
  /**
   * All key fields of the KpIs entity.
   */
  export const _keyFields: Array<Field<KpIs>> = [KpIs.KPI_CODE];
  /**
   * Mapping of all key field names to the respective static field property KpIs.
   */
  export const _keys: { [keys: string]: Field<KpIs> } = KpIs._keyFields.reduce((acc: { [keys: string]: Field<KpIs> }, field: Field<KpIs>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
