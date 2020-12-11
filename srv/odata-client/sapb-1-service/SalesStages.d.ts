import { SalesStagesRequestBuilder } from './SalesStagesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SalesStages" of service "SAPB1".
 */
export declare class SalesStages extends EntityV4 implements SalesStagesType {
    /**
     * Technical entity name for SalesStages.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Cancelled.
     * @nullable
     */
    cancelled?: BoYesNoEnum;
    /**
     * Is Sales.
     * @nullable
     */
    isSales?: BoYesNoEnum;
    /**
     * Is Purchasing.
     * @nullable
     */
    isPurchasing?: BoYesNoEnum;
    /**
     * One-to-many navigation property to the [[SalesOpportunities]] entity.
     */
    salesOpportunities: SalesOpportunities[];
    /**
     * Returns an entity builder to construct instances of `SalesStages`.
     * @returns A builder that constructs instances of entity type `SalesStages`.
     */
    static builder(): EntityBuilderType<SalesStages, SalesStagesType>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesStages` entity type.
     * @returns A `SalesStages` request builder.
     */
    static requestBuilder(): SalesStagesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesStages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesStages`.
     */
    static customField(fieldName: string): CustomFieldV4<SalesStages>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
export interface SalesStagesType {
    sequenceNo?: number | null;
    name?: string | null;
    stageno?: number | null;
    closingPercentage?: number | null;
    cancelled?: BoYesNoEnum | null;
    isSales?: BoYesNoEnum | null;
    isPurchasing?: BoYesNoEnum | null;
    salesOpportunities: SalesOpportunitiesType[];
}
export declare namespace SalesStages {
    /**
     * Static representation of the [[sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_NO: NumberField<SalesStages>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<SalesStages>;
    /**
     * Static representation of the [[stageno]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STAGENO: NumberField<SalesStages>;
    /**
     * Static representation of the [[closingPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_PERCENTAGE: NumberField<SalesStages>;
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELLED: EnumField<SalesStages>;
    /**
     * Static representation of the [[isSales]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SALES: EnumField<SalesStages>;
    /**
     * Static representation of the [[isPurchasing]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PURCHASING: EnumField<SalesStages>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<SalesStages, SalesOpportunities>;
    /**
     * All fields of the SalesStages entity.
     */
    const _allFields: Array<NumberField<SalesStages> | StringField<SalesStages> | EnumField<SalesStages> | OneToManyLink<SalesStages, SalesOpportunities>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesStages>;
    /**
     * All key fields of the SalesStages entity.
     */
    const _keyFields: Array<Field<SalesStages>>;
    /**
     * Mapping of all key field names to the respective static field property SalesStages.
     */
    const _keys: {
        [keys: string]: Field<SalesStages>;
    };
}
//# sourceMappingURL=SalesStages.d.ts.map