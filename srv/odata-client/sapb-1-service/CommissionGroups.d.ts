import { CommissionGroupsRequestBuilder } from './CommissionGroupsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "CommissionGroups" of service "SAPB1".
 */
export declare class CommissionGroups extends Entity implements CommissionGroupsType {
    /**
     * Technical entity name for CommissionGroups.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CommissionGroups.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Commission Group Code.
     * @nullable
     */
    commissionGroupCode?: number;
    /**
     * Commission Group Name.
     * @nullable
     */
    commissionGroupName?: string;
    /**
     * Commission Percentage.
     * @nullable
     */
    commissionPercentage?: number;
    /**
     * One-to-many navigation property to the [[SalesPersons]] entity.
     */
    salesPersons: SalesPersons[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * Returns an entity builder to construct instances `CommissionGroups`.
     * @returns A builder that constructs instances of entity type `CommissionGroups`.
     */
    static builder(): EntityBuilderType<CommissionGroups, CommissionGroupsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CommissionGroups` entity type.
     * @returns A `CommissionGroups` request builder.
     */
    static requestBuilder(): CommissionGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CommissionGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CommissionGroups`.
     */
    static customField(fieldName: string): CustomField<CommissionGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface CommissionGroupsType {
    commissionGroupCode?: number;
    commissionGroupName?: string;
    commissionPercentage?: number;
    salesPersons: SalesPersonsType[];
    items: ItemsType[];
    businessPartners: BusinessPartnersType[];
}
export interface CommissionGroupsTypeForceMandatory {
    commissionGroupCode: number;
    commissionGroupName: string;
    commissionPercentage: number;
    salesPersons: SalesPersonsType[];
    items: ItemsType[];
    businessPartners: BusinessPartnersType[];
}
export declare namespace CommissionGroups {
    /**
     * Static representation of the [[commissionGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_GROUP_CODE: NumberField<CommissionGroups>;
    /**
     * Static representation of the [[commissionGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_GROUP_NAME: StringField<CommissionGroups>;
    /**
     * Static representation of the [[commissionPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_PERCENTAGE: NumberField<CommissionGroups>;
    /**
     * Static representation of the one-to-many navigation property [[salesPersons]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSONS: OneToManyLink<CommissionGroups, SalesPersons>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<CommissionGroups, Items>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<CommissionGroups, BusinessPartners>;
    /**
     * All fields of the CommissionGroups entity.
     */
    const _allFields: Array<NumberField<CommissionGroups> | StringField<CommissionGroups> | OneToManyLink<CommissionGroups, SalesPersons> | OneToManyLink<CommissionGroups, Items> | OneToManyLink<CommissionGroups, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CommissionGroups>;
    /**
     * All key fields of the CommissionGroups entity.
     */
    const _keyFields: Array<Field<CommissionGroups>>;
    /**
     * Mapping of all key field names to the respective static field property CommissionGroups.
     */
    const _keys: {
        [keys: string]: Field<CommissionGroups>;
    };
}
//# sourceMappingURL=CommissionGroups.d.ts.map