import { IntrastatConfigurationRequestBuilder } from './IntrastatConfigurationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "IntrastatConfiguration" of service "SAPB1".
 */
export declare class IntrastatConfiguration extends Entity implements IntrastatConfigurationType {
    /**
     * Technical entity name for IntrastatConfiguration.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for IntrastatConfiguration.
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
    code?: string;
    /**
     * Descr.
     * @nullable
     */
    descr?: string;
    /**
     * Prcst Val.
     * @nullable
     */
    prcstVal?: number;
    /**
     * Supp Unit.
     * @nullable
     */
    suppUnit?: number;
    /**
     * Stat Code.
     * @nullable
     */
    statCode?: string;
    /**
     * Date From.
     * @nullable
     */
    dateFrom?: Moment;
    /**
     * Date To.
     * @nullable
     */
    dateTo?: Moment;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Conf Id.
     * @nullable
     */
    confId?: string;
    /**
     * Returns an entity builder to construct instances `IntrastatConfiguration`.
     * @returns A builder that constructs instances of entity type `IntrastatConfiguration`.
     */
    static builder(): EntityBuilderType<IntrastatConfiguration, IntrastatConfigurationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `IntrastatConfiguration` entity type.
     * @returns A `IntrastatConfiguration` request builder.
     */
    static requestBuilder(): IntrastatConfigurationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `IntrastatConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `IntrastatConfiguration`.
     */
    static customField(fieldName: string): CustomField<IntrastatConfiguration>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface IntrastatConfigurationType {
    absEntry?: number;
    code?: string;
    descr?: string;
    prcstVal?: number;
    suppUnit?: number;
    statCode?: string;
    dateFrom?: Moment;
    dateTo?: Moment;
    country?: string;
    confId?: string;
}
export interface IntrastatConfigurationTypeForceMandatory {
    absEntry: number;
    code: string;
    descr: string;
    prcstVal: number;
    suppUnit: number;
    statCode: string;
    dateFrom: Moment;
    dateTo: Moment;
    country: string;
    confId: string;
}
export declare namespace IntrastatConfiguration {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<IntrastatConfiguration>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<IntrastatConfiguration>;
    /**
     * Static representation of the [[descr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCR: StringField<IntrastatConfiguration>;
    /**
     * Static representation of the [[prcstVal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRCST_VAL: NumberField<IntrastatConfiguration>;
    /**
     * Static representation of the [[suppUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPP_UNIT: NumberField<IntrastatConfiguration>;
    /**
     * Static representation of the [[statCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STAT_CODE: StringField<IntrastatConfiguration>;
    /**
     * Static representation of the [[dateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_FROM: DateField<IntrastatConfiguration>;
    /**
     * Static representation of the [[dateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_TO: DateField<IntrastatConfiguration>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<IntrastatConfiguration>;
    /**
     * Static representation of the [[confId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONF_ID: StringField<IntrastatConfiguration>;
    /**
     * All fields of the IntrastatConfiguration entity.
     */
    const _allFields: Array<NumberField<IntrastatConfiguration> | StringField<IntrastatConfiguration> | DateField<IntrastatConfiguration>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<IntrastatConfiguration>;
    /**
     * All key fields of the IntrastatConfiguration entity.
     */
    const _keyFields: Array<Field<IntrastatConfiguration>>;
    /**
     * Mapping of all key field names to the respective static field property IntrastatConfiguration.
     */
    const _keys: {
        [keys: string]: Field<IntrastatConfiguration>;
    };
}
//# sourceMappingURL=IntrastatConfiguration.d.ts.map