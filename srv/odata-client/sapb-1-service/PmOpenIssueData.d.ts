import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class PmOpenIssueDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace PmOpenIssueData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmOpenIssueData;
}
//# sourceMappingURL=PmOpenIssueData.d.ts.map