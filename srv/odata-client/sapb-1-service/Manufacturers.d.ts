import { ManufacturersRequestBuilder } from './ManufacturersRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Manufacturers" of service "SAPB1".
 */
export declare class Manufacturers extends EntityV4 implements ManufacturersType {
    /**
     * Technical entity name for Manufacturers.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Manufacturer Name.
     * @nullable
     */
    manufacturerName?: string;
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * Returns an entity builder to construct instances of `Manufacturers`.
     * @returns A builder that constructs instances of entity type `Manufacturers`.
     */
    static builder(): EntityBuilderType<Manufacturers, ManufacturersType>;
    /**
     * Returns a request builder to construct requests for operations on the `Manufacturers` entity type.
     * @returns A `Manufacturers` request builder.
     */
    static requestBuilder(): ManufacturersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Manufacturers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Manufacturers`.
     */
    static customField(fieldName: string): CustomFieldV4<Manufacturers>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
export interface ManufacturersType {
    code?: number | null;
    manufacturerName?: string | null;
    items: ItemsType[];
}
export declare namespace Manufacturers {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<Manufacturers>;
    /**
     * Static representation of the [[manufacturerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUFACTURER_NAME: StringField<Manufacturers>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<Manufacturers, Items>;
    /**
     * All fields of the Manufacturers entity.
     */
    const _allFields: Array<NumberField<Manufacturers> | StringField<Manufacturers> | OneToManyLink<Manufacturers, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Manufacturers>;
    /**
     * All key fields of the Manufacturers entity.
     */
    const _keyFields: Array<Field<Manufacturers>>;
    /**
     * Mapping of all key field names to the respective static field property Manufacturers.
     */
    const _keys: {
        [keys: string]: Field<Manufacturers>;
    };
}
//# sourceMappingURL=Manufacturers.d.ts.map