import { BrazilFuelIndexersRequestBuilder } from './BrazilFuelIndexersRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BrazilFuelIndexers" of service "SAPB1".
 */
export declare class BrazilFuelIndexers extends EntityV4 implements BrazilFuelIndexersType {
    /**
     * Technical entity name for BrazilFuelIndexers.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Fuel Id.
     * @nullable
     */
    fuelId?: number;
    /**
     * Fuel Group Code.
     * @nullable
     */
    fuelGroupCode?: number;
    /**
     * Fuel Code.
     * @nullable
     */
    fuelCode?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * Returns an entity builder to construct instances of `BrazilFuelIndexers`.
     * @returns A builder that constructs instances of entity type `BrazilFuelIndexers`.
     */
    static builder(): EntityBuilderType<BrazilFuelIndexers, BrazilFuelIndexersType>;
    /**
     * Returns a request builder to construct requests for operations on the `BrazilFuelIndexers` entity type.
     * @returns A `BrazilFuelIndexers` request builder.
     */
    static requestBuilder(): BrazilFuelIndexersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilFuelIndexers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BrazilFuelIndexers`.
     */
    static customField(fieldName: string): CustomFieldV4<BrazilFuelIndexers>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
export interface BrazilFuelIndexersType {
    fuelId?: number | null;
    fuelGroupCode?: number | null;
    fuelCode?: string | null;
    description?: string | null;
    items: ItemsType[];
}
export declare namespace BrazilFuelIndexers {
    /**
     * Static representation of the [[fuelId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUEL_ID: NumberField<BrazilFuelIndexers>;
    /**
     * Static representation of the [[fuelGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUEL_GROUP_CODE: NumberField<BrazilFuelIndexers>;
    /**
     * Static representation of the [[fuelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUEL_CODE: StringField<BrazilFuelIndexers>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<BrazilFuelIndexers>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<BrazilFuelIndexers, Items>;
    /**
     * All fields of the BrazilFuelIndexers entity.
     */
    const _allFields: Array<NumberField<BrazilFuelIndexers> | StringField<BrazilFuelIndexers> | OneToManyLink<BrazilFuelIndexers, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BrazilFuelIndexers>;
    /**
     * All key fields of the BrazilFuelIndexers entity.
     */
    const _keyFields: Array<Field<BrazilFuelIndexers>>;
    /**
     * Mapping of all key field names to the respective static field property BrazilFuelIndexers.
     */
    const _keys: {
        [keys: string]: Field<BrazilFuelIndexers>;
    };
}
//# sourceMappingURL=BrazilFuelIndexers.d.ts.map