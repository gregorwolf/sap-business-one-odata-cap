/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SerialNumber } from './SerialNumber';
import { BatchNumber } from './BatchNumber';
import { DocumentLinesBinAllocation } from './DocumentLinesBinAllocation';
import { BoPickStatus } from './BoPickStatus';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Pick Status.
   * @nullable
   */
  pickStatus?: BoPickStatus;
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
  serialNumbers?: SerialNumber[];
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: BatchNumber[];
  /**
   * Document Lines Bin Allocations.
   * @nullable
   */
  documentLinesBinAllocations?: DocumentLinesBinAllocation[];
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
export class PickListsLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PickListsLine> {
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
   * Representation of the [[PickListsLine.pickStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PickStatus', this);
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
  serialNumbers: CollectionField<EntityT, SerialNumber> = new CollectionField('SerialNumbers', this, SerialNumber);
  /**
   * Representation of the [[PickListsLine.batchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: CollectionField<EntityT, BatchNumber> = new CollectionField('BatchNumbers', this, BatchNumber);
  /**
   * Representation of the [[PickListsLine.documentLinesBinAllocations]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLinesBinAllocations: CollectionField<EntityT, DocumentLinesBinAllocation> = new CollectionField('DocumentLinesBinAllocations', this, DocumentLinesBinAllocation);

  /**
   * Creates an instance of PickListsLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PickListsLine);
  }
}

export namespace PickListsLine {
  /**
   * Metadata information on all properties of the `PickListsLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PickListsLine>[] = [{
    originalName: 'AbsoluteEntry',
    name: 'absoluteEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'OrderEntry',
    name: 'orderEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'OrderRowID',
    name: 'orderRowId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PickedQuantity',
    name: 'pickedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PickStatus',
    name: 'pickStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ReleasedQuantity',
    name: 'releasedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PreviouslyReleasedQuantity',
    name: 'previouslyReleasedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseObjectType',
    name: 'baseObjectType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SerialNumbers',
    name: 'serialNumbers',
    type: SerialNumber,
    isCollection: true
  }, {
    originalName: 'BatchNumbers',
    name: 'batchNumbers',
    type: BatchNumber,
    isCollection: true
  }, {
    originalName: 'DocumentLinesBinAllocations',
    name: 'documentLinesBinAllocations',
    type: DocumentLinesBinAllocation,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | BatchNumber | DocumentLinesBinAllocation | SerialNumber }): PickListsLine {
    return deserializeComplexTypeV4(json, PickListsLine);
  }
}
