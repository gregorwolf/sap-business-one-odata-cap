import { CockpitsRequestBuilder } from './CockpitsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Cockpits" of service "SAPB1".
 */
export declare class Cockpits extends Entity implements CockpitsType {
    /**
     * Technical entity name for Cockpits.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Cockpits.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * User Signature.
     * @nullable
     */
    userSignature?: number;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Time.
     * @nullable
     */
    time?: Time;
    /**
     * Manufacturer.
     * @nullable
     */
    manufacturer?: string;
    /**
     * Publisher.
     * @nullable
     */
    publisher?: string;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * Returns an entity builder to construct instances `Cockpits`.
     * @returns A builder that constructs instances of entity type `Cockpits`.
     */
    static builder(): EntityBuilderType<Cockpits, CockpitsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Cockpits` entity type.
     * @returns A `Cockpits` request builder.
     */
    static requestBuilder(): CockpitsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Cockpits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Cockpits`.
     */
    static customField(fieldName: string): CustomField<Cockpits>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Users, UsersType } from './Users';
export interface CockpitsType {
    absEntry?: number;
    code?: number;
    name?: string;
    description?: string;
    userSignature?: number;
    date?: Moment;
    time?: Time;
    manufacturer?: string;
    publisher?: string;
    user: UsersType;
}
export interface CockpitsTypeForceMandatory {
    absEntry: number;
    code: number;
    name: string;
    description: string;
    userSignature: number;
    date: Moment;
    time: Time;
    manufacturer: string;
    publisher: string;
    user: UsersType;
}
export declare namespace Cockpits {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<Cockpits>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<Cockpits>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Cockpits>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Cockpits>;
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<Cockpits>;
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE: DateField<Cockpits>;
    /**
     * Static representation of the [[time]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME: TimeField<Cockpits>;
    /**
     * Static representation of the [[manufacturer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUFACTURER: StringField<Cockpits>;
    /**
     * Static representation of the [[publisher]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PUBLISHER: StringField<Cockpits>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<Cockpits, Users>;
    /**
     * All fields of the Cockpits entity.
     */
    const _allFields: Array<NumberField<Cockpits> | StringField<Cockpits> | DateField<Cockpits> | TimeField<Cockpits> | OneToOneLink<Cockpits, Users>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Cockpits>;
    /**
     * All key fields of the Cockpits entity.
     */
    const _keyFields: Array<Field<Cockpits>>;
    /**
     * Mapping of all key field names to the respective static field property Cockpits.
     */
    const _keys: {
        [keys: string]: Field<Cockpits>;
    };
}
//# sourceMappingURL=Cockpits.d.ts.map