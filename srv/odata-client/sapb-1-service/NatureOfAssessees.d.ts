import { NatureOfAssesseesRequestBuilder } from './NatureOfAssesseesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "NatureOfAssessees" of service "SAPB1".
 */
export declare class NatureOfAssessees extends Entity implements NatureOfAssesseesType {
    /**
     * Technical entity name for NatureOfAssessees.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for NatureOfAssessees.
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
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
     */
    withholdingTaxCodes: WithholdingTaxCodes[];
    /**
     * Returns an entity builder to construct instances `NatureOfAssessees`.
     * @returns A builder that constructs instances of entity type `NatureOfAssessees`.
     */
    static builder(): EntityBuilderType<NatureOfAssessees, NatureOfAssesseesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `NatureOfAssessees` entity type.
     * @returns A `NatureOfAssessees` request builder.
     */
    static requestBuilder(): NatureOfAssesseesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NatureOfAssessees`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NatureOfAssessees`.
     */
    static customField(fieldName: string): CustomField<NatureOfAssessees>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';
export interface NatureOfAssesseesType {
    absEntry?: number;
    code?: string;
    description?: string;
    withholdingTaxCodes: WithholdingTaxCodesType[];
}
export interface NatureOfAssesseesTypeForceMandatory {
    absEntry: number;
    code: string;
    description: string;
    withholdingTaxCodes: WithholdingTaxCodesType[];
}
export declare namespace NatureOfAssessees {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<NatureOfAssessees>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<NatureOfAssessees>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<NatureOfAssessees>;
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CODES: OneToManyLink<NatureOfAssessees, WithholdingTaxCodes>;
    /**
     * All fields of the NatureOfAssessees entity.
     */
    const _allFields: Array<NumberField<NatureOfAssessees> | StringField<NatureOfAssessees> | OneToManyLink<NatureOfAssessees, WithholdingTaxCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<NatureOfAssessees>;
    /**
     * All key fields of the NatureOfAssessees entity.
     */
    const _keyFields: Array<Field<NatureOfAssessees>>;
    /**
     * Mapping of all key field names to the respective static field property NatureOfAssessees.
     */
    const _keys: {
        [keys: string]: Field<NatureOfAssessees>;
    };
}
//# sourceMappingURL=NatureOfAssessees.d.ts.map