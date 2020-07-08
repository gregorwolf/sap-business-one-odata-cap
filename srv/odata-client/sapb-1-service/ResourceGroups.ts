/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceGroupsRequestBuilder } from './ResourceGroupsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ResourceGroups" of service "SAPB1".
 */
export class ResourceGroups extends Entity implements ResourceGroupsType {
  /**
   * Technical entity name for ResourceGroups.
   */
  static _entityName = 'ResourceGroups';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ResourceGroups.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Cost Name 1.
   * @nullable
   */
  costName1?: string;
  /**
   * Cost 1.
   * @nullable
   */
  cost1?: number;
  /**
   * Cost Name 2.
   * @nullable
   */
  costName2?: string;
  /**
   * Cost 2.
   * @nullable
   */
  cost2?: number;
  /**
   * Cost Name 3.
   * @nullable
   */
  costName3?: string;
  /**
   * Cost 3.
   * @nullable
   */
  cost3?: number;
  /**
   * Cost Name 4.
   * @nullable
   */
  costName4?: string;
  /**
   * Cost 4.
   * @nullable
   */
  cost4?: number;
  /**
   * Cost Name 5.
   * @nullable
   */
  costName5?: string;
  /**
   * Cost 5.
   * @nullable
   */
  cost5?: number;
  /**
   * Cost Name 6.
   * @nullable
   */
  costName6?: string;
  /**
   * Cost 6.
   * @nullable
   */
  cost6?: number;
  /**
   * Cost Name 7.
   * @nullable
   */
  costName7?: string;
  /**
   * Cost 7.
   * @nullable
   */
  cost7?: number;
  /**
   * Cost Name 8.
   * @nullable
   */
  costName8?: string;
  /**
   * Cost 8.
   * @nullable
   */
  cost8?: number;
  /**
   * Cost Name 9.
   * @nullable
   */
  costName9?: string;
  /**
   * Cost 9.
   * @nullable
   */
  cost9?: number;
  /**
   * Cost Name 10.
   * @nullable
   */
  costName10?: string;
  /**
   * Cost 10.
   * @nullable
   */
  cost10?: number;
  /**
   * Num Of Units Text.
   * @nullable
   */
  numOfUnitsText?: string;
  /**
   * One-to-many navigation property to the [[Resources]] entity.
   */
  resources!: Resources[];

  /**
   * Returns an entity builder to construct instances `ResourceGroups`.
   * @returns A builder that constructs instances of entity type `ResourceGroups`.
   */
  static builder(): EntityBuilderType<ResourceGroups, ResourceGroupsTypeForceMandatory> {
    return Entity.entityBuilder(ResourceGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ResourceGroups` entity type.
   * @returns A `ResourceGroups` request builder.
   */
  static requestBuilder(): ResourceGroupsRequestBuilder {
    return new ResourceGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ResourceGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ResourceGroups`.
   */
  static customField(fieldName: string): CustomField<ResourceGroups> {
    return Entity.customFieldSelector(fieldName, ResourceGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Resources, ResourcesType } from './Resources';

export interface ResourceGroupsType {
  code?: number;
  name?: string;
  costName1?: string;
  cost1?: number;
  costName2?: string;
  cost2?: number;
  costName3?: string;
  cost3?: number;
  costName4?: string;
  cost4?: number;
  costName5?: string;
  cost5?: number;
  costName6?: string;
  cost6?: number;
  costName7?: string;
  cost7?: number;
  costName8?: string;
  cost8?: number;
  costName9?: string;
  cost9?: number;
  costName10?: string;
  cost10?: number;
  numOfUnitsText?: string;
  resources: ResourcesType[];
}

export interface ResourceGroupsTypeForceMandatory {
  code: number;
  name: string;
  costName1: string;
  cost1: number;
  costName2: string;
  cost2: number;
  costName3: string;
  cost3: number;
  costName4: string;
  cost4: number;
  costName5: string;
  cost5: number;
  costName6: string;
  cost6: number;
  costName7: string;
  cost7: number;
  costName8: string;
  cost8: number;
  costName9: string;
  cost9: number;
  costName10: string;
  cost10: number;
  numOfUnitsText: string;
  resources: ResourcesType[];
}

export namespace ResourceGroups {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<ResourceGroups> = new NumberField('Code', ResourceGroups, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ResourceGroups> = new StringField('Name', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[costName1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_NAME_1: StringField<ResourceGroups> = new StringField('CostName1', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[cost1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_1: NumberField<ResourceGroups> = new NumberField('Cost1', ResourceGroups, 'Edm.Double');
  /**
   * Static representation of the [[costName2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_NAME_2: StringField<ResourceGroups> = new StringField('CostName2', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[cost2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_2: NumberField<ResourceGroups> = new NumberField('Cost2', ResourceGroups, 'Edm.Double');
  /**
   * Static representation of the [[costName3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_NAME_3: StringField<ResourceGroups> = new StringField('CostName3', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[cost3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_3: NumberField<ResourceGroups> = new NumberField('Cost3', ResourceGroups, 'Edm.Double');
  /**
   * Static representation of the [[costName4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_NAME_4: StringField<ResourceGroups> = new StringField('CostName4', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[cost4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_4: NumberField<ResourceGroups> = new NumberField('Cost4', ResourceGroups, 'Edm.Double');
  /**
   * Static representation of the [[costName5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_NAME_5: StringField<ResourceGroups> = new StringField('CostName5', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[cost5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_5: NumberField<ResourceGroups> = new NumberField('Cost5', ResourceGroups, 'Edm.Double');
  /**
   * Static representation of the [[costName6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_NAME_6: StringField<ResourceGroups> = new StringField('CostName6', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[cost6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_6: NumberField<ResourceGroups> = new NumberField('Cost6', ResourceGroups, 'Edm.Double');
  /**
   * Static representation of the [[costName7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_NAME_7: StringField<ResourceGroups> = new StringField('CostName7', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[cost7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_7: NumberField<ResourceGroups> = new NumberField('Cost7', ResourceGroups, 'Edm.Double');
  /**
   * Static representation of the [[costName8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_NAME_8: StringField<ResourceGroups> = new StringField('CostName8', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[cost8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_8: NumberField<ResourceGroups> = new NumberField('Cost8', ResourceGroups, 'Edm.Double');
  /**
   * Static representation of the [[costName9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_NAME_9: StringField<ResourceGroups> = new StringField('CostName9', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[cost9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_9: NumberField<ResourceGroups> = new NumberField('Cost9', ResourceGroups, 'Edm.Double');
  /**
   * Static representation of the [[costName10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_NAME_10: StringField<ResourceGroups> = new StringField('CostName10', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the [[cost10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_10: NumberField<ResourceGroups> = new NumberField('Cost10', ResourceGroups, 'Edm.Double');
  /**
   * Static representation of the [[numOfUnitsText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUM_OF_UNITS_TEXT: StringField<ResourceGroups> = new StringField('NumOfUnitsText', ResourceGroups, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[resources]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOURCES: OneToManyLink<ResourceGroups, Resources> = new OneToManyLink('Resources', ResourceGroups, Resources);
  /**
   * All fields of the ResourceGroups entity.
   */
  export const _allFields: Array<NumberField<ResourceGroups> | StringField<ResourceGroups> | OneToManyLink<ResourceGroups, Resources>> = [
    ResourceGroups.CODE,
    ResourceGroups.NAME,
    ResourceGroups.COST_NAME_1,
    ResourceGroups.COST_1,
    ResourceGroups.COST_NAME_2,
    ResourceGroups.COST_2,
    ResourceGroups.COST_NAME_3,
    ResourceGroups.COST_3,
    ResourceGroups.COST_NAME_4,
    ResourceGroups.COST_4,
    ResourceGroups.COST_NAME_5,
    ResourceGroups.COST_5,
    ResourceGroups.COST_NAME_6,
    ResourceGroups.COST_6,
    ResourceGroups.COST_NAME_7,
    ResourceGroups.COST_7,
    ResourceGroups.COST_NAME_8,
    ResourceGroups.COST_8,
    ResourceGroups.COST_NAME_9,
    ResourceGroups.COST_9,
    ResourceGroups.COST_NAME_10,
    ResourceGroups.COST_10,
    ResourceGroups.NUM_OF_UNITS_TEXT,
    ResourceGroups.RESOURCES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ResourceGroups> = new AllFields('*', ResourceGroups);
  /**
   * All key fields of the ResourceGroups entity.
   */
  export const _keyFields: Array<Field<ResourceGroups>> = [ResourceGroups.CODE];
  /**
   * Mapping of all key field names to the respective static field property ResourceGroups.
   */
  export const _keys: { [keys: string]: Field<ResourceGroups> } = ResourceGroups._keyFields.reduce((acc: { [keys: string]: Field<ResourceGroups> }, field: Field<ResourceGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
