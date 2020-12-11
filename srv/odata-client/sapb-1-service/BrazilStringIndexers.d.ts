import { BrazilStringIndexersRequestBuilder } from './BrazilStringIndexersRequestBuilder';
import { BrazilStringIndexerTypes } from './BrazilStringIndexerTypes';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BrazilStringIndexers" of service "SAPB1".
 */
export declare class BrazilStringIndexers extends EntityV4 implements BrazilStringIndexersType {
    /**
     * Technical entity name for BrazilStringIndexers.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Indexer Type.
     * @nullable
     */
    indexerType?: BrazilStringIndexerTypes;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Id.
     * @nullable
     */
    id?: number;
    /**
     * One-to-many navigation property to the [[BrazilBeverageIndexers]] entity.
     */
    brazilBeverageIndexers: BrazilBeverageIndexers[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlaces: BusinessPlaces[];
    /**
     * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
     */
    withholdingTaxCodes: WithholdingTaxCodes[];
    /**
     * Returns an entity builder to construct instances of `BrazilStringIndexers`.
     * @returns A builder that constructs instances of entity type `BrazilStringIndexers`.
     */
    static builder(): EntityBuilderType<BrazilStringIndexers, BrazilStringIndexersType>;
    /**
     * Returns a request builder to construct requests for operations on the `BrazilStringIndexers` entity type.
     * @returns A `BrazilStringIndexers` request builder.
     */
    static requestBuilder(): BrazilStringIndexersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilStringIndexers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BrazilStringIndexers`.
     */
    static customField(fieldName: string): CustomFieldV4<BrazilStringIndexers>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BrazilBeverageIndexers, BrazilBeverageIndexersType } from './BrazilBeverageIndexers';
import { Items, ItemsType } from './Items';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';
export interface BrazilStringIndexersType {
    indexerType?: BrazilStringIndexerTypes | null;
    code?: string | null;
    description?: string | null;
    id?: number | null;
    brazilBeverageIndexers: BrazilBeverageIndexersType[];
    items: ItemsType[];
    businessPlaces: BusinessPlacesType[];
    withholdingTaxCodes: WithholdingTaxCodesType[];
}
export declare namespace BrazilStringIndexers {
    /**
     * Static representation of the [[indexerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDEXER_TYPE: EnumField<BrazilStringIndexers>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<BrazilStringIndexers>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<BrazilStringIndexers>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: NumberField<BrazilStringIndexers>;
    /**
     * Static representation of the one-to-many navigation property [[brazilBeverageIndexers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRAZIL_BEVERAGE_INDEXERS: OneToManyLink<BrazilStringIndexers, BrazilBeverageIndexers>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<BrazilStringIndexers, Items>;
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACES: OneToManyLink<BrazilStringIndexers, BusinessPlaces>;
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CODES: OneToManyLink<BrazilStringIndexers, WithholdingTaxCodes>;
    /**
     * All fields of the BrazilStringIndexers entity.
     */
    const _allFields: Array<EnumField<BrazilStringIndexers> | StringField<BrazilStringIndexers> | NumberField<BrazilStringIndexers> | OneToManyLink<BrazilStringIndexers, BrazilBeverageIndexers> | OneToManyLink<BrazilStringIndexers, Items> | OneToManyLink<BrazilStringIndexers, BusinessPlaces> | OneToManyLink<BrazilStringIndexers, WithholdingTaxCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BrazilStringIndexers>;
    /**
     * All key fields of the BrazilStringIndexers entity.
     */
    const _keyFields: Array<Field<BrazilStringIndexers>>;
    /**
     * Mapping of all key field names to the respective static field property BrazilStringIndexers.
     */
    const _keys: {
        [keys: string]: Field<BrazilStringIndexers>;
    };
}
//# sourceMappingURL=BrazilStringIndexers.d.ts.map