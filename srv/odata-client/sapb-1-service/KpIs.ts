/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KpIsRequestBuilder } from './KpIsRequestBuilder';
import { KpiItemLine, KpiItemLineField } from './KpiItemLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "KPIs" of service "SAPB1".
 */
export class KpIs extends Entity implements KpIsType {
  /**
   * Technical entity name for KpIs.
   */
  static _entityName = 'KPIs';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for KpIs.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Returns an entity builder to construct instances `KpIs`.
   * @returns A builder that constructs instances of entity type `KpIs`.
   */
  static builder(): EntityBuilderType<KpIs, KpIsTypeForceMandatory> {
    return Entity.entityBuilder(KpIs);
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
  static customField(fieldName: string): CustomField<KpIs> {
    return Entity.customFieldSelector(fieldName, KpIs);
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
  kpiCode?: string;
  kpiName?: string;
  numberOfColumns?: number;
  kpiItemLines?: KpiItemLine[];
}

export interface KpIsTypeForceMandatory {
  kpiCode: string;
  kpiName: string;
  numberOfColumns: number;
  kpiItemLines: KpiItemLine[];
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
   * Static representation of the [[numberOfColumns]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_COLUMNS: NumberField<KpIs> = new NumberField('NumberOfColumns', KpIs, 'Edm.Int32');
  /**
   * Static representation of the [[kpiItemLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KPI_ITEM_LINES: CollectionField<KpIs> = new CollectionField('KPI_ItemLines', KpIs, new KpiItemLineField('', KpIs));
  /**
   * All fields of the KpIs entity.
   */
  export const _allFields: Array<StringField<KpIs> | NumberField<KpIs> | CollectionField<KpIs>> = [
    KpIs.KPI_CODE,
    KpIs.KPI_NAME,
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
