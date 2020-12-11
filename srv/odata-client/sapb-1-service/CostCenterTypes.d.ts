import { CostCenterTypesRequestBuilder } from './CostCenterTypesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CostCenterTypes" of service "SAPB1".
 */
export declare class CostCenterTypes extends EntityV4 implements CostCenterTypesType {
    /**
     * Technical entity name for CostCenterTypes.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Cost Center Type Code.
     * @nullable
     */
    costCenterTypeCode?: string;
    /**
     * Cost Center Type Name.
     * @nullable
     */
    costCenterTypeName?: string;
    /**
     * One-to-many navigation property to the [[ProfitCenters]] entity.
     */
    profitCenters: ProfitCenters[];
    /**
     * Returns an entity builder to construct instances of `CostCenterTypes`.
     * @returns A builder that constructs instances of entity type `CostCenterTypes`.
     */
    static builder(): EntityBuilderType<CostCenterTypes, CostCenterTypesType>;
    /**
     * Returns a request builder to construct requests for operations on the `CostCenterTypes` entity type.
     * @returns A `CostCenterTypes` request builder.
     */
    static requestBuilder(): CostCenterTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CostCenterTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CostCenterTypes`.
     */
    static customField(fieldName: string): CustomFieldV4<CostCenterTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ProfitCenters, ProfitCentersType } from './ProfitCenters';
export interface CostCenterTypesType {
    costCenterTypeCode?: string | null;
    costCenterTypeName?: string | null;
    profitCenters: ProfitCentersType[];
}
export declare namespace CostCenterTypes {
    /**
     * Static representation of the [[costCenterTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_TYPE_CODE: StringField<CostCenterTypes>;
    /**
     * Static representation of the [[costCenterTypeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_TYPE_NAME: StringField<CostCenterTypes>;
    /**
     * Static representation of the one-to-many navigation property [[profitCenters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFIT_CENTERS: OneToManyLink<CostCenterTypes, ProfitCenters>;
    /**
     * All fields of the CostCenterTypes entity.
     */
    const _allFields: Array<StringField<CostCenterTypes> | OneToManyLink<CostCenterTypes, ProfitCenters>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CostCenterTypes>;
    /**
     * All key fields of the CostCenterTypes entity.
     */
    const _keyFields: Array<Field<CostCenterTypes>>;
    /**
     * Mapping of all key field names to the respective static field property CostCenterTypes.
     */
    const _keys: {
        [keys: string]: Field<CostCenterTypes>;
    };
}
//# sourceMappingURL=CostCenterTypes.d.ts.map