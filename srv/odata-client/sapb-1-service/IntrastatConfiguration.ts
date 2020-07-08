/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntrastatConfigurationRequestBuilder } from './IntrastatConfigurationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "IntrastatConfiguration" of service "SAPB1".
 */
export class IntrastatConfiguration extends Entity implements IntrastatConfigurationType {
  /**
   * Technical entity name for IntrastatConfiguration.
   */
  static _entityName = 'IntrastatConfiguration';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for IntrastatConfiguration.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Descr.
   * @nullable
   */
  descr?: string;
  /**
   * Prcst Val.
   * @nullable
   */
  prcstVal?: number;
  /**
   * Supp Unit.
   * @nullable
   */
  suppUnit?: number;
  /**
   * Stat Code.
   * @nullable
   */
  statCode?: string;
  /**
   * Date From.
   * @nullable
   */
  dateFrom?: Moment;
  /**
   * Date To.
   * @nullable
   */
  dateTo?: Moment;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Conf Id.
   * @nullable
   */
  confId?: string;

  /**
   * Returns an entity builder to construct instances `IntrastatConfiguration`.
   * @returns A builder that constructs instances of entity type `IntrastatConfiguration`.
   */
  static builder(): EntityBuilderType<IntrastatConfiguration, IntrastatConfigurationTypeForceMandatory> {
    return Entity.entityBuilder(IntrastatConfiguration);
  }

  /**
   * Returns a request builder to construct requests for operations on the `IntrastatConfiguration` entity type.
   * @returns A `IntrastatConfiguration` request builder.
   */
  static requestBuilder(): IntrastatConfigurationRequestBuilder {
    return new IntrastatConfigurationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `IntrastatConfiguration`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `IntrastatConfiguration`.
   */
  static customField(fieldName: string): CustomField<IntrastatConfiguration> {
    return Entity.customFieldSelector(fieldName, IntrastatConfiguration);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface IntrastatConfigurationType {
  absEntry?: number;
  code?: string;
  descr?: string;
  prcstVal?: number;
  suppUnit?: number;
  statCode?: string;
  dateFrom?: Moment;
  dateTo?: Moment;
  country?: string;
  confId?: string;
}

export interface IntrastatConfigurationTypeForceMandatory {
  absEntry: number;
  code: string;
  descr: string;
  prcstVal: number;
  suppUnit: number;
  statCode: string;
  dateFrom: Moment;
  dateTo: Moment;
  country: string;
  confId: string;
}

export namespace IntrastatConfiguration {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<IntrastatConfiguration> = new NumberField('AbsEntry', IntrastatConfiguration, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<IntrastatConfiguration> = new StringField('Code', IntrastatConfiguration, 'Edm.String');
  /**
   * Static representation of the [[descr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCR: StringField<IntrastatConfiguration> = new StringField('Descr', IntrastatConfiguration, 'Edm.String');
  /**
   * Static representation of the [[prcstVal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRCST_VAL: NumberField<IntrastatConfiguration> = new NumberField('PrcstVal', IntrastatConfiguration, 'Edm.Double');
  /**
   * Static representation of the [[suppUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPP_UNIT: NumberField<IntrastatConfiguration> = new NumberField('SuppUnit', IntrastatConfiguration, 'Edm.Int32');
  /**
   * Static representation of the [[statCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STAT_CODE: StringField<IntrastatConfiguration> = new StringField('StatCode', IntrastatConfiguration, 'Edm.String');
  /**
   * Static representation of the [[dateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_FROM: DateField<IntrastatConfiguration> = new DateField('DateFrom', IntrastatConfiguration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[dateTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_TO: DateField<IntrastatConfiguration> = new DateField('DateTo', IntrastatConfiguration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<IntrastatConfiguration> = new StringField('Country', IntrastatConfiguration, 'Edm.String');
  /**
   * Static representation of the [[confId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONF_ID: StringField<IntrastatConfiguration> = new StringField('ConfID', IntrastatConfiguration, 'Edm.String');
  /**
   * All fields of the IntrastatConfiguration entity.
   */
  export const _allFields: Array<NumberField<IntrastatConfiguration> | StringField<IntrastatConfiguration> | DateField<IntrastatConfiguration>> = [
    IntrastatConfiguration.ABS_ENTRY,
    IntrastatConfiguration.CODE,
    IntrastatConfiguration.DESCR,
    IntrastatConfiguration.PRCST_VAL,
    IntrastatConfiguration.SUPP_UNIT,
    IntrastatConfiguration.STAT_CODE,
    IntrastatConfiguration.DATE_FROM,
    IntrastatConfiguration.DATE_TO,
    IntrastatConfiguration.COUNTRY,
    IntrastatConfiguration.CONF_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<IntrastatConfiguration> = new AllFields('*', IntrastatConfiguration);
  /**
   * All key fields of the IntrastatConfiguration entity.
   */
  export const _keyFields: Array<Field<IntrastatConfiguration>> = [IntrastatConfiguration.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property IntrastatConfiguration.
   */
  export const _keys: { [keys: string]: Field<IntrastatConfiguration> } = IntrastatConfiguration._keyFields.reduce((acc: { [keys: string]: Field<IntrastatConfiguration> }, field: Field<IntrastatConfiguration>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
