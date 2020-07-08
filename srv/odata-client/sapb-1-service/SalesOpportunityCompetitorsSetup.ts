/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOpportunityCompetitorsSetupRequestBuilder } from './SalesOpportunityCompetitorsSetupRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "SalesOpportunityCompetitorsSetup" of service "SAPB1".
 */
export class SalesOpportunityCompetitorsSetup extends Entity implements SalesOpportunityCompetitorsSetupType {
  /**
   * Technical entity name for SalesOpportunityCompetitorsSetup.
   */
  static _entityName = 'SalesOpportunityCompetitorsSetup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesOpportunityCompetitorsSetup.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Details.
   * @nullable
   */
  details?: string;

  /**
   * Returns an entity builder to construct instances `SalesOpportunityCompetitorsSetup`.
   * @returns A builder that constructs instances of entity type `SalesOpportunityCompetitorsSetup`.
   */
  static builder(): EntityBuilderType<SalesOpportunityCompetitorsSetup, SalesOpportunityCompetitorsSetupTypeForceMandatory> {
    return Entity.entityBuilder(SalesOpportunityCompetitorsSetup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesOpportunityCompetitorsSetup` entity type.
   * @returns A `SalesOpportunityCompetitorsSetup` request builder.
   */
  static requestBuilder(): SalesOpportunityCompetitorsSetupRequestBuilder {
    return new SalesOpportunityCompetitorsSetupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunityCompetitorsSetup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesOpportunityCompetitorsSetup`.
   */
  static customField(fieldName: string): CustomField<SalesOpportunityCompetitorsSetup> {
    return Entity.customFieldSelector(fieldName, SalesOpportunityCompetitorsSetup);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SalesOpportunityCompetitorsSetupType {
  sequenceNo?: number;
  name?: string;
  details?: string;
}

export interface SalesOpportunityCompetitorsSetupTypeForceMandatory {
  sequenceNo: number;
  name: string;
  details: string;
}

export namespace SalesOpportunityCompetitorsSetup {
  /**
   * Static representation of the [[sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_NO: NumberField<SalesOpportunityCompetitorsSetup> = new NumberField('SequenceNo', SalesOpportunityCompetitorsSetup, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<SalesOpportunityCompetitorsSetup> = new StringField('Name', SalesOpportunityCompetitorsSetup, 'Edm.String');
  /**
   * Static representation of the [[details]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DETAILS: StringField<SalesOpportunityCompetitorsSetup> = new StringField('Details', SalesOpportunityCompetitorsSetup, 'Edm.String');
  /**
   * All fields of the SalesOpportunityCompetitorsSetup entity.
   */
  export const _allFields: Array<NumberField<SalesOpportunityCompetitorsSetup> | StringField<SalesOpportunityCompetitorsSetup>> = [
    SalesOpportunityCompetitorsSetup.SEQUENCE_NO,
    SalesOpportunityCompetitorsSetup.NAME,
    SalesOpportunityCompetitorsSetup.DETAILS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesOpportunityCompetitorsSetup> = new AllFields('*', SalesOpportunityCompetitorsSetup);
  /**
   * All key fields of the SalesOpportunityCompetitorsSetup entity.
   */
  export const _keyFields: Array<Field<SalesOpportunityCompetitorsSetup>> = [SalesOpportunityCompetitorsSetup.SEQUENCE_NO];
  /**
   * Mapping of all key field names to the respective static field property SalesOpportunityCompetitorsSetup.
   */
  export const _keys: { [keys: string]: Field<SalesOpportunityCompetitorsSetup> } = SalesOpportunityCompetitorsSetup._keyFields.reduce((acc: { [keys: string]: Field<SalesOpportunityCompetitorsSetup> }, field: Field<SalesOpportunityCompetitorsSetup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
