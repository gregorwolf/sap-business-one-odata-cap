/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TerritoriesRequestBuilder } from './TerritoriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Territories" of service "SAPB1".
 */
export class Territories extends Entity implements TerritoriesType {
  /**
   * Technical entity name for Territories.
   */
  static _entityName = 'Territories';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Territories.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Territory Id.
   * @nullable
   */
  territoryId?: number;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Location Index.
   * @nullable
   */
  locationIndex?: number;
  /**
   * Parent.
   * @nullable
   */
  parent?: number;
  /**
   * One-to-many navigation property to the [[SalesOpportunities]] entity.
   */
  salesOpportunities!: SalesOpportunities[];
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards[];
  /**
   * One-to-many navigation property to the [[ProjectManagements]] entity.
   */
  projectManagements!: ProjectManagements[];

  /**
   * Returns an entity builder to construct instances `Territories`.
   * @returns A builder that constructs instances of entity type `Territories`.
   */
  static builder(): EntityBuilderType<Territories, TerritoriesTypeForceMandatory> {
    return Entity.entityBuilder(Territories);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Territories` entity type.
   * @returns A `Territories` request builder.
   */
  static requestBuilder(): TerritoriesRequestBuilder {
    return new TerritoriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Territories`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Territories`.
   */
  static customField(fieldName: string): CustomField<Territories> {
    return Entity.customFieldSelector(fieldName, Territories);
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
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { CustomerEquipmentCards, CustomerEquipmentCardsType } from './CustomerEquipmentCards';
import { ProjectManagements, ProjectManagementsType } from './ProjectManagements';

export interface TerritoriesType {
  territoryId?: number;
  description?: string;
  locationIndex?: number;
  parent?: number;
  salesOpportunities: SalesOpportunitiesType[];
  businessPartners: BusinessPartnersType[];
  customerEquipmentCards: CustomerEquipmentCardsType[];
  projectManagements: ProjectManagementsType[];
}

export interface TerritoriesTypeForceMandatory {
  territoryId: number;
  description: string;
  locationIndex: number;
  parent: number;
  salesOpportunities: SalesOpportunitiesType[];
  businessPartners: BusinessPartnersType[];
  customerEquipmentCards: CustomerEquipmentCardsType[];
  projectManagements: ProjectManagementsType[];
}

export namespace Territories {
  /**
   * Static representation of the [[territoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY_ID: NumberField<Territories> = new NumberField('TerritoryID', Territories, 'Edm.Int32');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Territories> = new StringField('Description', Territories, 'Edm.String');
  /**
   * Static representation of the [[locationIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_INDEX: NumberField<Territories> = new NumberField('LocationIndex', Territories, 'Edm.Int32');
  /**
   * Static representation of the [[parent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT: NumberField<Territories> = new NumberField('Parent', Territories, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITIES: OneToManyLink<Territories, SalesOpportunities> = new OneToManyLink('SalesOpportunities', Territories, SalesOpportunities);
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<Territories, BusinessPartners> = new OneToManyLink('BusinessPartners', Territories, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<Territories, CustomerEquipmentCards> = new OneToManyLink('CustomerEquipmentCards', Territories, CustomerEquipmentCards);
  /**
   * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_MANAGEMENTS: OneToManyLink<Territories, ProjectManagements> = new OneToManyLink('ProjectManagements', Territories, ProjectManagements);
  /**
   * All fields of the Territories entity.
   */
  export const _allFields: Array<NumberField<Territories> | StringField<Territories> | OneToManyLink<Territories, SalesOpportunities> | OneToManyLink<Territories, BusinessPartners> | OneToManyLink<Territories, CustomerEquipmentCards> | OneToManyLink<Territories, ProjectManagements>> = [
    Territories.TERRITORY_ID,
    Territories.DESCRIPTION,
    Territories.LOCATION_INDEX,
    Territories.PARENT,
    Territories.SALES_OPPORTUNITIES,
    Territories.BUSINESS_PARTNERS,
    Territories.CUSTOMER_EQUIPMENT_CARDS,
    Territories.PROJECT_MANAGEMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Territories> = new AllFields('*', Territories);
  /**
   * All key fields of the Territories entity.
   */
  export const _keyFields: Array<Field<Territories>> = [Territories.TERRITORY_ID];
  /**
   * Mapping of all key field names to the respective static field property Territories.
   */
  export const _keys: { [keys: string]: Field<Territories> } = Territories._keyFields.reduce((acc: { [keys: string]: Field<Territories> }, field: Field<Territories>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
