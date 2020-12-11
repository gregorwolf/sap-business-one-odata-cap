import { BrazilBeverageIndexersRequestBuilder } from './BrazilBeverageIndexersRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BrazilBeverageIndexers" of service "SAPB1".
 */
export declare class BrazilBeverageIndexers extends EntityV4 implements BrazilBeverageIndexersType {
    /**
     * Technical entity name for BrazilBeverageIndexers.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Beverage Group Code.
     * @nullable
     */
    beverageGroupCode?: string;
    /**
     * Beverage Table Code.
     * @nullable
     */
    beverageTableCode?: string;
    /**
     * Beverage Commercial Brand Code.
     * @nullable
     */
    beverageCommercialBrandCode?: number;
    /**
     * Beverage Id.
     * @nullable
     */
    beverageId?: number;
    /**
     * One-to-one navigation property to the [[BrazilStringIndexers]] entity.
     */
    brazilStringIndexer: BrazilStringIndexers;
    /**
     * One-to-one navigation property to the [[BrazilNumericIndexers]] entity.
     */
    brazilNumericIndexer: BrazilNumericIndexers;
    /**
     * Returns an entity builder to construct instances of `BrazilBeverageIndexers`.
     * @returns A builder that constructs instances of entity type `BrazilBeverageIndexers`.
     */
    static builder(): EntityBuilderType<BrazilBeverageIndexers, BrazilBeverageIndexersType>;
    /**
     * Returns a request builder to construct requests for operations on the `BrazilBeverageIndexers` entity type.
     * @returns A `BrazilBeverageIndexers` request builder.
     */
    static requestBuilder(): BrazilBeverageIndexersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilBeverageIndexers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BrazilBeverageIndexers`.
     */
    static customField(fieldName: string): CustomFieldV4<BrazilBeverageIndexers>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BrazilStringIndexers, BrazilStringIndexersType } from './BrazilStringIndexers';
import { BrazilNumericIndexers, BrazilNumericIndexersType } from './BrazilNumericIndexers';
export interface BrazilBeverageIndexersType {
    beverageGroupCode?: string | null;
    beverageTableCode?: string | null;
    beverageCommercialBrandCode?: number | null;
    beverageId?: number | null;
    brazilStringIndexer: BrazilStringIndexersType;
    brazilNumericIndexer: BrazilNumericIndexersType;
}
export declare namespace BrazilBeverageIndexers {
    /**
     * Static representation of the [[beverageGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEVERAGE_GROUP_CODE: StringField<BrazilBeverageIndexers>;
    /**
     * Static representation of the [[beverageTableCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEVERAGE_TABLE_CODE: StringField<BrazilBeverageIndexers>;
    /**
     * Static representation of the [[beverageCommercialBrandCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEVERAGE_COMMERCIAL_BRAND_CODE: NumberField<BrazilBeverageIndexers>;
    /**
     * Static representation of the [[beverageId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEVERAGE_ID: NumberField<BrazilBeverageIndexers>;
    /**
     * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRAZIL_STRING_INDEXER: OneToOneLink<BrazilBeverageIndexers, BrazilStringIndexers>;
    /**
     * Static representation of the one-to-one navigation property [[brazilNumericIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRAZIL_NUMERIC_INDEXER: OneToOneLink<BrazilBeverageIndexers, BrazilNumericIndexers>;
    /**
     * All fields of the BrazilBeverageIndexers entity.
     */
    const _allFields: Array<StringField<BrazilBeverageIndexers> | NumberField<BrazilBeverageIndexers> | OneToOneLink<BrazilBeverageIndexers, BrazilStringIndexers> | OneToOneLink<BrazilBeverageIndexers, BrazilNumericIndexers>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BrazilBeverageIndexers>;
    /**
     * All key fields of the BrazilBeverageIndexers entity.
     */
    const _keyFields: Array<Field<BrazilBeverageIndexers>>;
    /**
     * Mapping of all key field names to the respective static field property BrazilBeverageIndexers.
     */
    const _keys: {
        [keys: string]: Field<BrazilBeverageIndexers>;
    };
}
//# sourceMappingURL=BrazilBeverageIndexers.d.ts.map