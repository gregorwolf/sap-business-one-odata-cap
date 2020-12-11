/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntrastatConfigurationRequestBuilder } from './IntrastatConfigurationRequestBuilder';
import { Moment } from 'moment';
import { IntrastatConfigurationEnum } from './IntrastatConfigurationEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "IntrastatConfiguration" of service "SAPB1".
 */
export class IntrastatConfiguration extends EntityV4 implements IntrastatConfigurationType {
  /**
   * Technical entity name for IntrastatConfiguration.
   */
  static _entityName = 'IntrastatConfiguration';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Conf Type.
   * @nullable
   */
  confType?: IntrastatConfigurationEnum;
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
   * Export.
   * @nullable
   */
  export?: BoYesNoEnum;
  /**
   * Import.
   * @nullable
   */
  import?: BoYesNoEnum;
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
   * Returns an entity builder to construct instances of `IntrastatConfiguration`.
   * @returns A builder that constructs instances of entity type `IntrastatConfiguration`.
   */
  static builder(): EntityBuilderType<IntrastatConfiguration, IntrastatConfigurationType> {
    return EntityV4.entityBuilder(IntrastatConfiguration);
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
  static customField(fieldName: string): CustomFieldV4<IntrastatConfiguration> {
    return EntityV4.customFieldSelector(fieldName, IntrastatConfiguration);
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
  absEntry?: number | null;
  confType?: IntrastatConfigurationEnum | null;
  code?: string | null;
  descr?: string | null;
  prcstVal?: number | null;
  suppUnit?: number | null;
  export?: BoYesNoEnum | null;
  import?: BoYesNoEnum | null;
  statCode?: string | null;
  dateFrom?: Moment | null;
  dateTo?: Moment | null;
  country?: string | null;
  confId?: string | null;
}

export namespace IntrastatConfiguration {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<IntrastatConfiguration> = new NumberField('AbsEntry', IntrastatConfiguration, 'Edm.Int32');
  /**
   * Static representation of the [[confType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONF_TYPE: EnumField<IntrastatConfiguration> = new EnumField('ConfType', IntrastatConfiguration);
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
   * Static representation of the [[export]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPORT: EnumField<IntrastatConfiguration> = new EnumField('Export', IntrastatConfiguration);
  /**
   * Static representation of the [[import]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPORT: EnumField<IntrastatConfiguration> = new EnumField('Import', IntrastatConfiguration);
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
  export const _allFields: Array<NumberField<IntrastatConfiguration> | EnumField<IntrastatConfiguration> | StringField<IntrastatConfiguration> | DateField<IntrastatConfiguration>> = [
    IntrastatConfiguration.ABS_ENTRY,
    IntrastatConfiguration.CONF_TYPE,
    IntrastatConfiguration.CODE,
    IntrastatConfiguration.DESCR,
    IntrastatConfiguration.PRCST_VAL,
    IntrastatConfiguration.SUPP_UNIT,
    IntrastatConfiguration.EXPORT,
    IntrastatConfiguration.IMPORT,
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
