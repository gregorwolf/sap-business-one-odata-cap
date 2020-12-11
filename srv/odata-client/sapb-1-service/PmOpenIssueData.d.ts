import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmOpenIssueData
 */
export interface PmOpenIssueData {
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Area.
     * @nullable
     */
    area?: number;
    /**
     * Priority.
     * @nullable
     */
    priority?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Closed.
     * @nullable
     */
    closed?: BoYesNoEnum;
    /**
     * Solution Id.
     * @nullable
     */
    solutionId?: number;
    /**
     * Responsible.
     * @nullable
     */
    responsible?: number;
    /**
     * Entered By.
     * @nullable
     */
    enteredBy?: number;
    /**
     * Entered Date.
     * @nullable
     */
    enteredDate?: Moment;
    /**
     * Effort.
     * @nullable
     */
    effort?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmOpenIssueData.build]] instead.
 */
export declare function createPmOpenIssueData(json: any): PmOpenIssueData;
/**
 * PmOpenIssueDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmOpenIssueDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmOpenIssueData> {
    /**
     * Representation of the [[PmOpenIssueData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmOpenIssueData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmOpenIssueData.area]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    area: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmOpenIssueData.priority]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priority: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmOpenIssueData.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmOpenIssueData.closed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    closed: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmOpenIssueData.solutionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    solutionId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmOpenIssueData.responsible]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    responsible: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmOpenIssueData.enteredBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enteredBy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmOpenIssueData.enteredDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    enteredDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmOpenIssueData.effort]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effort: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PmOpenIssueDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmOpenIssueData {
    /**
     * Metadata information on all properties of the `PmOpenIssueData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmOpenIssueData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmOpenIssueData;
}
//# sourceMappingURL=PmOpenIssueData.d.ts.map