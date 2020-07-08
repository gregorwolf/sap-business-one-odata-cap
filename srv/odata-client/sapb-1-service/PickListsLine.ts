/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SerialNumber, SerialNumberField } from './SerialNumber';
import { BatchNumber, BatchNumberField } from './BatchNumber';
import { DocumentLinesBinAllocation, DocumentLinesBinAllocationField } from './DocumentLinesBinAllocation';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PickListsLine
 */
export interface PickListsLine {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Order Entry.
   * @nullable
   */
  orderEntry?: number;
  /**
   * Order Row Id.
   * @nullable
   */
  orderRowId?: number;
  /**
   * Picked Quantity.
   * @nullable
   */
  pickedQuantity?: number;
  /**
   * Released Quantity.
   * @nullable
   */
  releasedQuantity?: number;
  /**
   * Previously Released Quantity.
   * @nullable
   */
  previouslyReleasedQuantity?: number;
  /**
   * Base Object Type.
   * @nullable
   */
  baseObjectType?: number;
  /**
   * Serial Numbers.
   * @nullable
   */
  serialNumbers?: SerialNumber;
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: BatchNumber;
  /**
   * Document Lines Bin Allocations.
   * @nullable
   */
  documentLinesBinAllocations?: DocumentLinesBinAllocation;
}

/**
 * @deprecated Since v1.6.0. Use [[PickListsLine.build]] instead.
 */
export function createPickListsLine(json: any): PickListsLine {
  return PickListsLine.build(json);
}

/**
 * PickListsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PickListsLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PickListsLine.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PickListsLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[PickListsLine.orderEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OrderEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PickListsLine.orderRowId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderRowId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OrderRowID', this, 'Edm.Int32');
  /**
   * Representation of the [[PickListsLine.pickedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PickedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[PickListsLine.releasedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  releasedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReleasedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[PickListsLine.previouslyReleasedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  previouslyReleasedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PreviouslyReleasedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[PickListsLine.baseObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseObjectType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseObjectType', this, 'Edm.Int32');
  /**
   * Representation of the [[PickListsLine.serialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumbers: SerialNumberField<EntityT> = new SerialNumberField('SerialNumbers', this);
  /**
   * Representation of the [[PickListsLine.batchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: BatchNumberField<EntityT> = new BatchNumberField('BatchNumbers', this);
  /**
   * Representation of the [[PickListsLine.documentLinesBinAllocations]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLinesBinAllocations: DocumentLinesBinAllocationField<EntityT> = new DocumentLinesBinAllocationField('DocumentLinesBinAllocations', this);
}

export namespace PickListsLine {
  export function build(json: { [keys: string]: FieldType | BatchNumber | DocumentLinesBinAllocation | SerialNumber }): PickListsLine {
    return createComplexType(json, {
      AbsoluteEntry: (absoluteEntry: number) => ({ absoluteEntry: edmToTs(absoluteEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      OrderEntry: (orderEntry: number) => ({ orderEntry: edmToTs(orderEntry, 'Edm.Int32') }),
      OrderRowID: (orderRowId: number) => ({ orderRowId: edmToTs(orderRowId, 'Edm.Int32') }),
      PickedQuantity: (pickedQuantity: number) => ({ pickedQuantity: edmToTs(pickedQuantity, 'Edm.Double') }),
      ReleasedQuantity: (releasedQuantity: number) => ({ releasedQuantity: edmToTs(releasedQuantity, 'Edm.Double') }),
      PreviouslyReleasedQuantity: (previouslyReleasedQuantity: number) => ({ previouslyReleasedQuantity: edmToTs(previouslyReleasedQuantity, 'Edm.Double') }),
      BaseObjectType: (baseObjectType: number) => ({ baseObjectType: edmToTs(baseObjectType, 'Edm.Int32') }),
      SerialNumbers: (serialNumbers: SerialNumber) => ({ serialNumbers: SerialNumber.build(serialNumbers) }),
      BatchNumbers: (batchNumbers: BatchNumber) => ({ batchNumbers: BatchNumber.build(batchNumbers) }),
      DocumentLinesBinAllocations: (documentLinesBinAllocations: DocumentLinesBinAllocation) => ({ documentLinesBinAllocations: DocumentLinesBinAllocation.build(documentLinesBinAllocations) })
    });
  }
}
