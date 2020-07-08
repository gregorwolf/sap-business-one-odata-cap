/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createResourceCapacityParams(json: any): ResourceCapacityParams {
  return ResourceCapacityParams.build(json);
}

/**
 * ResourceCapacityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceCapacityParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ResourceCapacityParams.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Id', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ResourceCapacityParams.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
  /**
   * Representation of the [[ResourceCapacityParams.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ResourceCapacityParams.capacity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  capacity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Capacity', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceCapacityParams.sourceEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SourceEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.sourceLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceLineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SourceLineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.baseEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.baseLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.owningEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owningEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OwningEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.owningLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owningLineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OwningLineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.revertedEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revertedEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RevertedEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.revertedLineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revertedLineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RevertedLineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ResourceCapacityParams.memo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  memo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Memo', this, 'Edm.String');
  /**
   * Representation of the [[ResourceCapacityParams.singleRunCapacity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRunCapacity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SingleRunCapacity', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceCapacityParams.singleRunMemo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRunMemo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SingleRunMemo', this, 'Edm.String');
}

export namespace ResourceCapacityParams {
  export function build(json: { [keys: string]: FieldType }): ResourceCapacityParams {
    return createComplexType(json, {
      Id: (id: number) => ({ id: edmToTs(id, 'Edm.Int32') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Warehouse: (warehouse: string) => ({ warehouse: edmToTs(warehouse, 'Edm.String') }),
      Date: (date: Moment) => ({ date: edmToTs(date, 'Edm.DateTimeOffset') }),
      Capacity: (capacity: number) => ({ capacity: edmToTs(capacity, 'Edm.Double') }),
      SourceEntry: (sourceEntry: number) => ({ sourceEntry: edmToTs(sourceEntry, 'Edm.Int32') }),
      SourceLineNum: (sourceLineNum: number) => ({ sourceLineNum: edmToTs(sourceLineNum, 'Edm.Int32') }),
      BaseEntry: (baseEntry: number) => ({ baseEntry: edmToTs(baseEntry, 'Edm.Int32') }),
      BaseLineNum: (baseLineNum: number) => ({ baseLineNum: edmToTs(baseLineNum, 'Edm.Int32') }),
      OwningEntry: (owningEntry: number) => ({ owningEntry: edmToTs(owningEntry, 'Edm.Int32') }),
      OwningLineNum: (owningLineNum: number) => ({ owningLineNum: edmToTs(owningLineNum, 'Edm.Int32') }),
      RevertedEntry: (revertedEntry: number) => ({ revertedEntry: edmToTs(revertedEntry, 'Edm.Int32') }),
      RevertedLineNum: (revertedLineNum: number) => ({ revertedLineNum: edmToTs(revertedLineNum, 'Edm.Int32') }),
      Memo: (memo: string) => ({ memo: edmToTs(memo, 'Edm.String') }),
      SingleRunCapacity: (singleRunCapacity: number) => ({ singleRunCapacity: edmToTs(singleRunCapacity, 'Edm.Double') }),
      SingleRunMemo: (singleRunMemo: string) => ({ singleRunMemo: edmToTs(singleRunMemo, 'Edm.String') })
    });
  }
}
