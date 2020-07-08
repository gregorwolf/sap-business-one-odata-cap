/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOpportunitySourcesSetupRequestBuilder } from './SalesOpportunitySourcesSetupRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "SalesOpportunitySourcesSetup" of service "SAPB1".
 */
export class SalesOpportunitySourcesSetup extends Entity implements SalesOpportunitySourcesSetupType {
  /**
   * Technical entity name for SalesOpportunitySourcesSetup.
   */
  static _entityName = 'SalesOpportunitySourcesSetup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesOpportunitySourcesSetup.
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
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Sort.
   * @nullable
   */
  sort?: number;
  /**
   * One-to-many navigation property to the [[SalesOpportunities]] entity.
   */
  salesOpportunities!: SalesOpportunities[];

  /**
   * Returns an entity builder to construct instances `SalesOpportunitySourcesSetup`.
   * @returns A builder that constructs instances of entity type `SalesOpportunitySourcesSetup`.
   */
  static builder(): EntityBuilderType<SalesOpportunitySourcesSetup, SalesOpportunitySourcesSetupTypeForceMandatory> {
    return Entity.entityBuilder(SalesOpportunitySourcesSetup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesOpportunitySourcesSetup` entity type.
   * @returns A `SalesOpportunitySourcesSetup` request builder.
   */
  static requestBuilder(): SalesOpportunitySourcesSetupRequestBuilder {
    return new SalesOpportunitySourcesSetupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunitySourcesSetup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesOpportunitySourcesSetup`.
   */
  static customField(fieldName: string): CustomField<SalesOpportunitySourcesSetup> {
    return Entity.customFieldSelector(fieldName, SalesOpportunitySourcesSetup);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';

export interface SalesOpportunitySourcesSetupType {
  sequenceNo?: number;
  description?: string;
  sort?: number;
  salesOpportunities: SalesOpportunitiesType[];
}

export interface SalesOpportunitySourcesSetupTypeForceMandatory {
  sequenceNo: number;
  description: string;
  sort: number;
  salesOpportunities: SalesOpportunitiesType[];
}

export namespace SalesOpportunitySourcesSetup {
  /**
   * Static representation of the [[sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_NO: NumberField<SalesOpportunitySourcesSetup> = new NumberField('SequenceNo', SalesOpportunitySourcesSetup, 'Edm.Int32');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<SalesOpportunitySourcesSetup> = new StringField('Description', SalesOpportunitySourcesSetup, 'Edm.String');
  /**
   * Static representation of the [[sort]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SORT: NumberField<SalesOpportunitySourcesSetup> = new NumberField('Sort', SalesOpportunitySourcesSetup, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES: OneToManyLink<SalesOpportunitySourcesSetup, SalesOpportunities> = new OneToManyLink('SalesOpportunities', SalesOpportunitySourcesSetup, SalesOpportunities);
  /**
   * All fields of the SalesOpportunitySourcesSetup entity.
   */
  export const _allFields: Array<NumberField<SalesOpportunitySourcesSetup> | StringField<SalesOpportunitySourcesSetup> | OneToManyLink<SalesOpportunitySourcesSetup, SalesOpportunities>> = [
    SalesOpportunitySourcesSetup.SEQUENCE_NO,
    SalesOpportunitySourcesSetup.DESCRIPTION,
    SalesOpportunitySourcesSetup.SORT,
    SalesOpportunitySourcesSetup.SALES_OPPORTUNITIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesOpportunitySourcesSetup> = new AllFields('*', SalesOpportunitySourcesSetup);
  /**
   * All key fields of the SalesOpportunitySourcesSetup entity.
   */
  export const _keyFields: Array<Field<SalesOpportunitySourcesSetup>> = [SalesOpportunitySourcesSetup.SEQUENCE_NO];
  /**
   * Mapping of all key field names to the respective static field property SalesOpportunitySourcesSetup.
   */
  export const _keys: { [keys: string]: Field<SalesOpportunitySourcesSetup> } = SalesOpportunitySourcesSetup._keyFields.reduce((acc: { [keys: string]: Field<SalesOpportunitySourcesSetup> }, field: Field<SalesOpportunitySourcesSetup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
