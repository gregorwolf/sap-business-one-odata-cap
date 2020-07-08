import { BrazilNumericIndexersRequestBuilder } from './BrazilNumericIndexersRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BrazilNumericIndexers" of service "SAPB1".
 */
export declare class BrazilNumericIndexers extends Entity implements BrazilNumericIndexersType {
    /**
     * Technical entity name for BrazilNumericIndexers.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BrazilNumericIndexers.
     */
    static _serviceName: string;
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
     * Returns an entity builder to construct instances `BrazilNumericIndexers`.
     * @returns A builder that constructs instances of entity type `BrazilNumericIndexers`.
     */
    static builder(): EntityBuilderType<BrazilNumericIndexers, BrazilNumericIndexersTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BrazilNumericIndexers` entity type.
     * @returns A `BrazilNumericIndexers` request builder.
     */
    static requestBuilder(): BrazilNumericIndexersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilNumericIndexers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BrazilNumericIndexers`.
     */
    static customField(fieldName: string): CustomField<BrazilNumericIndexers>;
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
export interface BrazilNumericIndexersType {
    code?: number;
    description?: string;
    id?: number;
    brazilBeverageIndexers: BrazilBeverageIndexersType[];
    items: ItemsType[];
    businessPlaces: BusinessPlacesType[];
}
export interface BrazilNumericIndexersTypeForceMandatory {
    code: number;
    description: string;
    id: number;
    brazilBeverageIndexers: BrazilBeverageIndexersType[];
    items: ItemsType[];
    businessPlaces: BusinessPlacesType[];
}
export declare namespace BrazilNumericIndexers {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<BrazilNumericIndexers>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<BrazilNumericIndexers>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: NumberField<BrazilNumericIndexers>;
    /**
     * Static representation of the one-to-many navigation property [[brazilBeverageIndexers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRAZIL_BEVERAGE_INDEXERS: OneToManyLink<BrazilNumericIndexers, BrazilBeverageIndexers>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<BrazilNumericIndexers, Items>;
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACES: OneToManyLink<BrazilNumericIndexers, BusinessPlaces>;
    /**
     * All fields of the BrazilNumericIndexers entity.
     */
    const _allFields: Array<NumberField<BrazilNumericIndexers> | StringField<BrazilNumericIndexers> | OneToManyLink<BrazilNumericIndexers, BrazilBeverageIndexers> | OneToManyLink<BrazilNumericIndexers, Items> | OneToManyLink<BrazilNumericIndexers, BusinessPlaces>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BrazilNumericIndexers>;
    /**
     * All key fields of the BrazilNumericIndexers entity.
     */
    const _keyFields: Array<Field<BrazilNumericIndexers>>;
    /**
     * Mapping of all key field names to the respective static field property BrazilNumericIndexers.
     */
    const _keys: {
        [keys: string]: Field<BrazilNumericIndexers>;
    };
}
//# sourceMappingURL=BrazilNumericIndexers.d.ts.map