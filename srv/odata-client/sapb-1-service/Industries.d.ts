import { IndustriesRequestBuilder } from './IndustriesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Industries" of service "SAPB1".
 */
export declare class Industries extends EntityV4 implements IndustriesType {
    /**
     * Technical entity name for Industries.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Industry Description.
     * @nullable
     */
    industryDescription?: string;
    /**
     * Industry Name.
     * @nullable
     */
    industryName?: string;
    /**
     * Industry Code.
     * @nullable
     */
    industryCode?: number;
    /**
     * One-to-many navigation property to the [[SalesOpportunities]] entity.
     */
    salesOpportunities: SalesOpportunities[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-many navigation property to the [[ProjectManagements]] entity.
     */
    projectManagements: ProjectManagements[];
    /**
     * Returns an entity builder to construct instances of `Industries`.
     * @returns A builder that constructs instances of entity type `Industries`.
     */
    static builder(): EntityBuilderType<Industries, IndustriesType>;
    /**
     * Returns a request builder to construct requests for operations on the `Industries` entity type.
     * @returns A `Industries` request builder.
     */
    static requestBuilder(): IndustriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Industries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Industries`.
     */
    static customField(fieldName: string): CustomFieldV4<Industries>;
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
import { ProjectManagements, ProjectManagementsType } from './ProjectManagements';
export interface IndustriesType {
    industryDescription?: string | null;
    industryName?: string | null;
    industryCode?: number | null;
    salesOpportunities: SalesOpportunitiesType[];
    businessPartners: BusinessPartnersType[];
    projectManagements: ProjectManagementsType[];
}
export declare namespace Industries {
    /**
     * Static representation of the [[industryDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_DESCRIPTION: StringField<Industries>;
    /**
     * Static representation of the [[industryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_NAME: StringField<Industries>;
    /**
     * Static representation of the [[industryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE: NumberField<Industries>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<Industries, SalesOpportunities>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<Industries, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_MANAGEMENTS: OneToManyLink<Industries, ProjectManagements>;
    /**
     * All fields of the Industries entity.
     */
    const _allFields: Array<StringField<Industries> | NumberField<Industries> | OneToManyLink<Industries, SalesOpportunities> | OneToManyLink<Industries, BusinessPartners> | OneToManyLink<Industries, ProjectManagements>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Industries>;
    /**
     * All key fields of the Industries entity.
     */
    const _keyFields: Array<Field<Industries>>;
    /**
     * Mapping of all key field names to the respective static field property Industries.
     */
    const _keys: {
        [keys: string]: Field<Industries>;
    };
}
//# sourceMappingURL=Industries.d.ts.map