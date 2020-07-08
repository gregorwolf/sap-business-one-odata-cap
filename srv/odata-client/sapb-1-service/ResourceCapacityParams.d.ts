import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ResourceCapacityParams
 */
export interface ResourceCapacityParams {
    /**
     * Id.
     * @nullable
     */
    id?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Capacity.
     * @nullable
     */
    capacity?: number;
    /**
     * Source Entry.
     * @nullable
     */
    sourceEntry?: number;
    /**
     * Source Line Num.
     * @nullable
     */
    sourceLineNum?: number;
    /**
     * Base Entry.
     * @nullable
     */
    baseEntry?: number;
    /**
     * Base Line Num.
     * @nullable
     */
    baseLineNum?: number;
    /**
     * Owning Entry.
     * @nullable
     */
    owningEntry?: number;
    /**
     * Owning Line Num.
     * @nullable
     */
    owningLineNum?: number;
    /**
     * Reverted Entry.
     * @nullable
     */
    revertedEntry?: number;
    /**
     * Reverted Line Num.
     * @nullable
     */
    revertedLineNum?: number;
    /**
     * Memo.
     * @nullable
     */
    memo?: string;
    /**
     * Single Run Capacity.
     * @nullable
     */
    singleRunCapacity?: number;
    /**
     * Single Run Memo.
     * @nullable
     */
    singleRunMemo?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ResourceCapacityParams.build]] instead.
 */
export declare function createResourceCapacityParams(json: any): ResourceCapacityParams;
/**
 * ResourceCapacityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourceCapacityParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ResourceCapacityParams.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.capacity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    capacity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.sourceEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.sourceLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.baseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.baseLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.owningEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    owningEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.owningLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    owningLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.revertedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    revertedEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.revertedLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    revertedLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.memo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    memo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.singleRunCapacity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    singleRunCapacity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityParams.singleRunMemo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    singleRunMemo: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ResourceCapacityParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceCapacityParams;
}
//# sourceMappingURL=ResourceCapacityParams.d.ts.map