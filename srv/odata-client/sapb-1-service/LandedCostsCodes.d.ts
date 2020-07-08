import { LandedCostsCodesRequestBuilder } from './LandedCostsCodesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "LandedCostsCodes" of service "SAPB1".
 */
export declare class LandedCostsCodes extends Entity implements LandedCostsCodesType {
    /**
     * Technical entity name for LandedCostsCodes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LandedCostsCodes.
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
     * Landed Costs Allocation Account.
     * @nullable
     */
    landedCostsAllocationAccount?: string;
    /**
     * Returns an entity builder to construct instances `LandedCostsCodes`.
     * @returns A builder that constructs instances of entity type `LandedCostsCodes`.
     */
    static builder(): EntityBuilderType<LandedCostsCodes, LandedCostsCodesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `LandedCostsCodes` entity type.
     * @returns A `LandedCostsCodes` request builder.
     */
    static requestBuilder(): LandedCostsCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LandedCostsCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LandedCostsCodes`.
     */
    static customField(fieldName: string): CustomField<LandedCostsCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface LandedCostsCodesType {
    code?: string;
    name?: string;
    landedCostsAllocationAccount?: string;
}
export interface LandedCostsCodesTypeForceMandatory {
    code: string;
    name: string;
    landedCostsAllocationAccount: string;
}
export declare namespace LandedCostsCodes {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<LandedCostsCodes>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<LandedCostsCodes>;
    /**
     * Static representation of the [[landedCostsAllocationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANDED_COSTS_ALLOCATION_ACCOUNT: StringField<LandedCostsCodes>;
    /**
     * All fields of the LandedCostsCodes entity.
     */
    const _allFields: Array<StringField<LandedCostsCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LandedCostsCodes>;
    /**
     * All key fields of the LandedCostsCodes entity.
     */
    const _keyFields: Array<Field<LandedCostsCodes>>;
    /**
     * Mapping of all key field names to the respective static field property LandedCostsCodes.
     */
    const _keys: {
        [keys: string]: Field<LandedCostsCodes>;
    };
}
//# sourceMappingURL=LandedCostsCodes.d.ts.map