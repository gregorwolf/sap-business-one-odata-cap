/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesStagesRequestBuilder } from './SalesStagesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "SalesStages" of service "SAPB1".
 */
export class SalesStages extends Entity implements SalesStagesType {
  /**
   * Technical entity name for SalesStages.
   */
  static _entityName = 'SalesStages';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesStages.
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
   * Stageno.
   * @nullable
   */
  stageno?: number;
  /**
   * Closing Percentage.
   * @nullable
   */
  closingPercentage?: number;
  /**
   * One-to-many navigation property to the [[SalesOpportunities]] entity.
   */
  salesOpportunities!: SalesOpportunities[];

  /**
   * Returns an entity builder to construct instances `SalesStages`.
   * @returns A builder that constructs instances of entity type `SalesStages`.
   */
  static builder(): EntityBuilderType<SalesStages, SalesStagesTypeForceMandatory> {
    return Entity.entityBuilder(SalesStages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesStages` entity type.
   * @returns A `SalesStages` request builder.
   */
  static requestBuilder(): SalesStagesRequestBuilder {
    return new SalesStagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesStages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesStages`.
   */
  static customField(fieldName: string): CustomField<SalesStages> {
    return Entity.customFieldSelector(fieldName, SalesStages);
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

export interface SalesStagesType {
  sequenceNo?: number;
  name?: string;
  stageno?: number;
  closingPercentage?: number;
  salesOpportunities: SalesOpportunitiesType[];
}

export interface SalesStagesTypeForceMandatory {
  sequenceNo: number;
  name: string;
  stageno: number;
  closingPercentage: number;
  salesOpportunities: SalesOpportunitiesType[];
}

export namespace SalesStages {
  /**
   * Static representation of the [[sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_NO: NumberField<SalesStages> = new NumberField('SequenceNo', SalesStages, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<SalesStages> = new StringField('Name', SalesStages, 'Edm.String');
  /**
   * Static representation of the [[stageno]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STAGENO: NumberField<SalesStages> = new NumberField('Stageno', SalesStages, 'Edm.Int32');
  /**
   * Static representation of the [[closingPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_PERCENTAGE: NumberField<SalesStages> = new NumberField('ClosingPercentage', SalesStages, 'Edm.Double');
  /**
   * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES: OneToManyLink<SalesStages, SalesOpportunities> = new OneToManyLink('SalesOpportunities', SalesStages, SalesOpportunities);
  /**
   * All fields of the SalesStages entity.
   */
  export const _allFields: Array<NumberField<SalesStages> | StringField<SalesStages> | OneToManyLink<SalesStages, SalesOpportunities>> = [
    SalesStages.SEQUENCE_NO,
    SalesStages.NAME,
    SalesStages.STAGENO,
    SalesStages.CLOSING_PERCENTAGE,
    SalesStages.SALES_OPPORTUNITIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesStages> = new AllFields('*', SalesStages);
  /**
   * All key fields of the SalesStages entity.
   */
  export const _keyFields: Array<Field<SalesStages>> = [SalesStages.SEQUENCE_NO];
  /**
   * Mapping of all key field names to the respective static field property SalesStages.
   */
  export const _keys: { [keys: string]: Field<SalesStages> } = SalesStages._keyFields.reduce((acc: { [keys: string]: Field<SalesStages> }, field: Field<SalesStages>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
