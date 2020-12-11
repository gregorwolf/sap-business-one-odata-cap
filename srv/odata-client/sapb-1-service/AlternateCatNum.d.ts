import { AlternateCatNumRequestBuilder } from './AlternateCatNumRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AlternateCatNum" of service "SAPB1".
 */
export declare class AlternateCatNum extends EntityV4 implements AlternateCatNumType {
    /**
     * Technical entity name for AlternateCatNum.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Substitute.
     * @nullable
     */
    substitute?: string;
    /**
     * Display Bp Catalog Number.
     * @nullable
     */
    displayBpCatalogNumber?: BoYesNoEnum;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * Returns an entity builder to construct instances of `AlternateCatNum`.
     * @returns A builder that constructs instances of entity type `AlternateCatNum`.
     */
    static builder(): EntityBuilderType<AlternateCatNum, AlternateCatNumType>;
    /**
     * Returns a request builder to construct requests for operations on the `AlternateCatNum` entity type.
     * @returns A `AlternateCatNum` request builder.
     */
    static requestBuilder(): AlternateCatNumRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AlternateCatNum`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AlternateCatNum`.
     */
    static customField(fieldName: string): CustomFieldV4<AlternateCatNum>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface AlternateCatNumType {
    itemCode?: string | null;
    cardCode?: string | null;
    substitute?: string | null;
    displayBpCatalogNumber?: BoYesNoEnum | null;
    item: ItemsType;
    businessPartner: BusinessPartnersType;
}
export declare namespace AlternateCatNum {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<AlternateCatNum>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<AlternateCatNum>;
    /**
     * Static representation of the [[substitute]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBSTITUTE: StringField<AlternateCatNum>;
    /**
     * Static representation of the [[displayBpCatalogNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_BP_CATALOG_NUMBER: EnumField<AlternateCatNum>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<AlternateCatNum, Items>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<AlternateCatNum, BusinessPartners>;
    /**
     * All fields of the AlternateCatNum entity.
     */
    const _allFields: Array<StringField<AlternateCatNum> | EnumField<AlternateCatNum> | OneToOneLink<AlternateCatNum, Items> | OneToOneLink<AlternateCatNum, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AlternateCatNum>;
    /**
     * All key fields of the AlternateCatNum entity.
     */
    const _keyFields: Array<Field<AlternateCatNum>>;
    /**
     * Mapping of all key field names to the respective static field property AlternateCatNum.
     */
    const _keys: {
        [keys: string]: Field<AlternateCatNum>;
    };
}
//# sourceMappingURL=AlternateCatNum.d.ts.map