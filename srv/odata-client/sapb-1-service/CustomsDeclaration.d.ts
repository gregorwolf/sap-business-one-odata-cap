import { CustomsDeclarationRequestBuilder } from './CustomsDeclarationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "CustomsDeclaration" of service "SAPB1".
 */
export declare class CustomsDeclaration extends Entity implements CustomsDeclarationType {
    /**
     * Technical entity name for CustomsDeclaration.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomsDeclaration.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Ccd Num.
     * @nullable
     */
    ccdNum?: string;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Customs Broker.
     * @nullable
     */
    customsBroker?: string;
    /**
     * Doc Num.
     * @nullable
     */
    docNum?: string;
    /**
     * Doc Date.
     * @nullable
     */
    docDate?: Moment;
    /**
     * Supply Num.
     * @nullable
     */
    supplyNum?: string;
    /**
     * Supply Date.
     * @nullable
     */
    supplyDate?: Moment;
    /**
     * Customs Terminal.
     * @nullable
     */
    customsTerminal?: string;
    /**
     * Payment Key.
     * @nullable
     */
    paymentKey?: string;
    /**
     * Returns an entity builder to construct instances `CustomsDeclaration`.
     * @returns A builder that constructs instances of entity type `CustomsDeclaration`.
     */
    static builder(): EntityBuilderType<CustomsDeclaration, CustomsDeclarationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomsDeclaration` entity type.
     * @returns A `CustomsDeclaration` request builder.
     */
    static requestBuilder(): CustomsDeclarationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomsDeclaration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomsDeclaration`.
     */
    static customField(fieldName: string): CustomField<CustomsDeclaration>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustomsDeclarationType {
    ccdNum?: string;
    date?: Moment;
    customsBroker?: string;
    docNum?: string;
    docDate?: Moment;
    supplyNum?: string;
    supplyDate?: Moment;
    customsTerminal?: string;
    paymentKey?: string;
}
export interface CustomsDeclarationTypeForceMandatory {
    ccdNum: string;
    date: Moment;
    customsBroker: string;
    docNum: string;
    docDate: Moment;
    supplyNum: string;
    supplyDate: Moment;
    customsTerminal: string;
    paymentKey: string;
}
export declare namespace CustomsDeclaration {
    /**
     * Static representation of the [[ccdNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CCD_NUM: StringField<CustomsDeclaration>;
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE: DateField<CustomsDeclaration>;
    /**
     * Static representation of the [[customsBroker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMS_BROKER: StringField<CustomsDeclaration>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: StringField<CustomsDeclaration>;
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DATE: DateField<CustomsDeclaration>;
    /**
     * Static representation of the [[supplyNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLY_NUM: StringField<CustomsDeclaration>;
    /**
     * Static representation of the [[supplyDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLY_DATE: DateField<CustomsDeclaration>;
    /**
     * Static representation of the [[customsTerminal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMS_TERMINAL: StringField<CustomsDeclaration>;
    /**
     * Static representation of the [[paymentKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_KEY: StringField<CustomsDeclaration>;
    /**
     * All fields of the CustomsDeclaration entity.
     */
    const _allFields: Array<StringField<CustomsDeclaration> | DateField<CustomsDeclaration>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomsDeclaration>;
    /**
     * All key fields of the CustomsDeclaration entity.
     */
    const _keyFields: Array<Field<CustomsDeclaration>>;
    /**
     * Mapping of all key field names to the respective static field property CustomsDeclaration.
     */
    const _keys: {
        [keys: string]: Field<CustomsDeclaration>;
    };
}
//# sourceMappingURL=CustomsDeclaration.d.ts.map