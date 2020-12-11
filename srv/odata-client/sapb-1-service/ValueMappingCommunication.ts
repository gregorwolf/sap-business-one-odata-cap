/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValueMappingCommunicationRequestBuilder } from './ValueMappingCommunicationRequestBuilder';
import { Moment } from 'moment';
import { VmCommunicationTypeEnum } from './VmCommunicationTypeEnum';
import { VmCommunicationStatusEnum } from './VmCommunicationStatusEnum';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ValueMappingCommunication" of service "SAPB1".
 */
export class ValueMappingCommunication extends EntityV4 implements ValueMappingCommunicationType {
  /**
   * Technical entity name for ValueMappingCommunication.
   */
  static _entityName = 'ValueMappingCommunication';
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
   * Third Party System Id.
   * @nullable
   */
  thirdPartySystemId?: number;
  /**
   * Object Id.
   * @nullable
   */
  objectId?: number;
  /**
   * Communication Type.
   * @nullable
   */
  communicationType?: VmCommunicationTypeEnum;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: number;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * End Time.
   * @nullable
   */
  endTime?: number;
  /**
   * Message.
   * @nullable
   */
  message?: string;
  /**
   * Status.
   * @nullable
   */
  status?: VmCommunicationStatusEnum;

  /**
   * Returns an entity builder to construct instances of `ValueMappingCommunication`.
   * @returns A builder that constructs instances of entity type `ValueMappingCommunication`.
   */
  static builder(): EntityBuilderType<ValueMappingCommunication, ValueMappingCommunicationType> {
    return EntityV4.entityBuilder(ValueMappingCommunication);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ValueMappingCommunication` entity type.
   * @returns A `ValueMappingCommunication` request builder.
   */
  static requestBuilder(): ValueMappingCommunicationRequestBuilder {
    return new ValueMappingCommunicationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ValueMappingCommunication`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ValueMappingCommunication`.
   */
  static customField(fieldName: string): CustomFieldV4<ValueMappingCommunication> {
    return EntityV4.customFieldSelector(fieldName, ValueMappingCommunication);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ValueMappingCommunicationType {
  absEntry?: number | null;
  thirdPartySystemId?: number | null;
  objectId?: number | null;
  communicationType?: VmCommunicationTypeEnum | null;
  startDate?: Moment | null;
  startTime?: number | null;
  endDate?: Moment | null;
  endTime?: number | null;
  message?: string | null;
  status?: VmCommunicationStatusEnum | null;
}

export namespace ValueMappingCommunication {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<ValueMappingCommunication> = new NumberField('AbsEntry', ValueMappingCommunication, 'Edm.Int32');
  /**
   * Static representation of the [[thirdPartySystemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THIRD_PARTY_SYSTEM_ID: NumberField<ValueMappingCommunication> = new NumberField('ThirdPartySystemId', ValueMappingCommunication, 'Edm.Int32');
  /**
   * Static representation of the [[objectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_ID: NumberField<ValueMappingCommunication> = new NumberField('ObjectId', ValueMappingCommunication, 'Edm.Int32');
  /**
   * Static representation of the [[communicationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMUNICATION_TYPE: EnumField<ValueMappingCommunication> = new EnumField('CommunicationType', ValueMappingCommunication);
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<ValueMappingCommunication> = new DateField('StartDate', ValueMappingCommunication, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: NumberField<ValueMappingCommunication> = new NumberField('StartTime', ValueMappingCommunication, 'Edm.Int32');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<ValueMappingCommunication> = new DateField('EndDate', ValueMappingCommunication, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: NumberField<ValueMappingCommunication> = new NumberField('EndTime', ValueMappingCommunication, 'Edm.Int32');
  /**
   * Static representation of the [[message]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGE: StringField<ValueMappingCommunication> = new StringField('Message', ValueMappingCommunication, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: EnumField<ValueMappingCommunication> = new EnumField('Status', ValueMappingCommunication);
  /**
   * All fields of the ValueMappingCommunication entity.
   */
  export const _allFields: Array<NumberField<ValueMappingCommunication> | EnumField<ValueMappingCommunication> | DateField<ValueMappingCommunication> | StringField<ValueMappingCommunication>> = [
    ValueMappingCommunication.ABS_ENTRY,
    ValueMappingCommunication.THIRD_PARTY_SYSTEM_ID,
    ValueMappingCommunication.OBJECT_ID,
    ValueMappingCommunication.COMMUNICATION_TYPE,
    ValueMappingCommunication.START_DATE,
    ValueMappingCommunication.START_TIME,
    ValueMappingCommunication.END_DATE,
    ValueMappingCommunication.END_TIME,
    ValueMappingCommunication.MESSAGE,
    ValueMappingCommunication.STATUS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ValueMappingCommunication> = new AllFields('*', ValueMappingCommunication);
  /**
   * All key fields of the ValueMappingCommunication entity.
   */
  export const _keyFields: Array<Field<ValueMappingCommunication>> = [ValueMappingCommunication.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property ValueMappingCommunication.
   */
  export const _keys: { [keys: string]: Field<ValueMappingCommunication> } = ValueMappingCommunication._keyFields.reduce((acc: { [keys: string]: Field<ValueMappingCommunication> }, field: Field<ValueMappingCommunication>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
