import { StatesRequestBuilder } from './StatesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "States" of service "SAPB1".
 */
export declare class States extends EntityV4 implements StatesType {
    /**
     * Technical entity name for States.
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
    code?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country2: Countries;
    /**
     * Returns an entity builder to construct instances of `States`.
     * @returns A builder that constructs instances of entity type `States`.
     */
    static builder(): EntityBuilderType<States, StatesType>;
    /**
     * Returns a request builder to construct requests for operations on the `States` entity type.
     * @returns A `States` request builder.
     */
    static requestBuilder(): StatesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `States`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `States`.
     */
    static customField(fieldName: string): CustomFieldV4<States>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Countries, CountriesType } from './Countries';
export interface StatesType {
    code?: string | null;
    country?: string | null;
    name?: string | null;
    country2: CountriesType;
}
export declare namespace States {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<States>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<States>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<States>;
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_2: OneToOneLink<States, Countries>;
    /**
     * All fields of the States entity.
     */
    const _allFields: Array<StringField<States> | OneToOneLink<States, Countries>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<States>;
    /**
     * All key fields of the States entity.
     */
    const _keyFields: Array<Field<States>>;
    /**
     * Mapping of all key field names to the respective static field property States.
     */
    const _keys: {
        [keys: string]: Field<States>;
    };
}
//# sourceMappingURL=States.d.ts.map