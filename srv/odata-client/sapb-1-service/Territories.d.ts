import { TerritoriesRequestBuilder } from './TerritoriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Territories" of service "SAPB1".
 */
export declare class Territories extends Entity implements TerritoriesType {
    /**
     * Technical entity name for Territories.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Territories.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    salesOpportunities: SalesOpportunities[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
     */
    customerEquipmentCards: CustomerEquipmentCards[];
    /**
     * One-to-many navigation property to the [[ProjectManagements]] entity.
     */
    projectManagements: ProjectManagements[];
    /**
     * Returns an entity builder to construct instances `Territories`.
     * @returns A builder that constructs instances of entity type `Territories`.
     */
    static builder(): EntityBuilderType<Territories, TerritoriesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Territories` entity type.
     * @returns A `Territories` request builder.
     */
    static requestBuilder(): TerritoriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Territories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Territories`.
     */
    static customField(fieldName: string): CustomField<Territories>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Territories {
    /**
     * Static representation of the [[territoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY_ID: NumberField<Territories>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Territories>;
    /**
     * Static representation of the [[locationIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_INDEX: NumberField<Territories>;
    /**
     * Static representation of the [[parent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT: NumberField<Territories>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<Territories, SalesOpportunities>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<Territories, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<Territories, CustomerEquipmentCards>;
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_MANAGEMENTS: OneToManyLink<Territories, ProjectManagements>;
    /**
     * All fields of the Territories entity.
     */
    const _allFields: Array<NumberField<Territories> | StringField<Territories> | OneToManyLink<Territories, SalesOpportunities> | OneToManyLink<Territories, BusinessPartners> | OneToManyLink<Territories, CustomerEquipmentCards> | OneToManyLink<Territories, ProjectManagements>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Territories>;
    /**
     * All key fields of the Territories entity.
     */
    const _keyFields: Array<Field<Territories>>;
    /**
     * Mapping of all key field names to the respective static field property Territories.
     */
    const _keys: {
        [keys: string]: Field<Territories>;
    };
}
//# sourceMappingURL=Territories.d.ts.map