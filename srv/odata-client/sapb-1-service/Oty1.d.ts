import { Oty1RequestBuilder } from './Oty1RequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "OTY1" of service "SAPB1".
 */
export declare class Oty1 extends Entity implements Oty1Type {
    /**
     * Technical entity name for Oty1.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Oty1.
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
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Canceled.
     * @nullable
     */
    canceled?: string;
    /**
     * Object.
     * @nullable
     */
    object?: string;
    /**
     * Log Inst.
     * @nullable
     */
    logInst?: number;
    /**
     * User Sign.
     * @nullable
     */
    userSign?: number;
    /**
     * Transfered.
     * @nullable
     */
    transfered?: string;
    /**
     * Create Date.
     * @nullable
     */
    createDate?: Moment;
    /**
     * Create Time.
     * @nullable
     */
    createTime?: Time;
    /**
     * Update Date.
     * @nullable
     */
    updateDate?: Moment;
    /**
     * Update Time.
     * @nullable
     */
    updateTime?: Time;
    /**
     * Data Source.
     * @nullable
     */
    dataSource?: string;
    /**
     * Returns an entity builder to construct instances `Oty1`.
     * @returns A builder that constructs instances of entity type `Oty1`.
     */
    static builder(): EntityBuilderType<Oty1, Oty1TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Oty1` entity type.
     * @returns A `Oty1` request builder.
     */
    static requestBuilder(): Oty1RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Oty1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Oty1`.
     */
    static customField(fieldName: string): CustomField<Oty1>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Oty1Type {
    code?: string;
    name?: string;
    docEntry?: number;
    canceled?: string;
    object?: string;
    logInst?: number;
    userSign?: number;
    transfered?: string;
    createDate?: Moment;
    createTime?: Time;
    updateDate?: Moment;
    updateTime?: Time;
    dataSource?: string;
}
export interface Oty1TypeForceMandatory {
    code: string;
    name: string;
    docEntry: number;
    canceled: string;
    object: string;
    logInst: number;
    userSign: number;
    transfered: string;
    createDate: Moment;
    createTime: Time;
    updateDate: Moment;
    updateTime: Time;
    dataSource: string;
}
export declare namespace Oty1 {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Oty1>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Oty1>;
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<Oty1>;
    /**
     * Static representation of the [[canceled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELED: StringField<Oty1>;
    /**
     * Static representation of the [[object]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT: StringField<Oty1>;
    /**
     * Static representation of the [[logInst]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOG_INST: NumberField<Oty1>;
    /**
     * Static representation of the [[userSign]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGN: NumberField<Oty1>;
    /**
     * Static representation of the [[transfered]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSFERED: StringField<Oty1>;
    /**
     * Static representation of the [[createDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATE_DATE: DateField<Oty1>;
    /**
     * Static representation of the [[createTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATE_TIME: TimeField<Oty1>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<Oty1>;
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_TIME: TimeField<Oty1>;
    /**
     * Static representation of the [[dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_SOURCE: StringField<Oty1>;
    /**
     * All fields of the Oty1 entity.
     */
    const _allFields: Array<StringField<Oty1> | NumberField<Oty1> | DateField<Oty1> | TimeField<Oty1>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Oty1>;
    /**
     * All key fields of the Oty1 entity.
     */
    const _keyFields: Array<Field<Oty1>>;
    /**
     * Mapping of all key field names to the respective static field property Oty1.
     */
    const _keys: {
        [keys: string]: Field<Oty1>;
    };
}
//# sourceMappingURL=Oty1.d.ts.map