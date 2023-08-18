/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SerialNumber } from './SerialNumber';
import { BatchNumber } from './BatchNumber';
import { DocumentLinesBinAllocation } from './DocumentLinesBinAllocation';
import { BoPickStatus } from './BoPickStatus';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * PickListsLine
 */
export interface PickListsLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Order Entry.
   * @nullable
   */
  orderEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Order Row Id.
   * @nullable
   */
  orderRowId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Picked Quantity.
   * @nullable
   */
  pickedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Pick Status.
   * @nullable
   */
  pickStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Released Quantity.
   * @nullable
   */
  releasedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Previously Released Quantity.
   * @nullable
   */
  previouslyReleasedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Object Type.
   * @nullable
   */
  baseObjectType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Serial Numbers.
   * @nullable
   */
  serialNumbers?: DeserializedType<DeSerializersT, 'SAPB1.SerialNumber'>;
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: DeserializedType<DeSerializersT, 'SAPB1.BatchNumber'>;
  /**
   * Document Lines Bin Allocations.
   * @nullable
   */
  documentLinesBinAllocations?: DeserializedType<
    DeSerializersT,
    'SAPB1.DocumentLinesBinAllocation'
  >;
}

/**
 * PickListsLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PickListsLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PickListsLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PickListsLine.absoluteEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsoluteEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link PickListsLine.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link PickListsLine.orderEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OrderEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link PickListsLine.orderRowId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderRowId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OrderRowID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PickListsLine.pickedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PickedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PickListsLine.pickStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pickStatus: EnumField<EntityT, DeSerializersT, BoPickStatus, true, false> =
    this._fieldBuilder.buildEnumField('PickStatus', BoPickStatus, true);
  /**
   * Representation of the {@link PickListsLine.releasedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  releasedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReleasedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PickListsLine.previouslyReleasedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  previouslyReleasedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PreviouslyReleasedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PickListsLine.baseObjectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseObjectType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseObjectType', 'Edm.Int32', true);
  /**
   * Representation of the {@link PickListsLine.serialNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    SerialNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'SerialNumbers',
    SerialNumber,
    true
  );
  /**
   * Representation of the {@link PickListsLine.batchNumbers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: CollectionField<
    EntityT,
    DeSerializersT,
    BatchNumber,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'BatchNumbers',
    BatchNumber,
    true
  );
  /**
   * Representation of the {@link PickListsLine.documentLinesBinAllocations} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentLinesBinAllocations: CollectionField<
    EntityT,
    DeSerializersT,
    DocumentLinesBinAllocation,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'DocumentLinesBinAllocations',
    DocumentLinesBinAllocation,
    true
  );

  /**
   * Creates an instance of PickListsLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PickListsLine, fieldOptions);
  }
}

export namespace PickListsLine {
  /**
   * Metadata information on all properties of the `PickListsLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PickListsLine>[] = [
    {
      originalName: 'AbsoluteEntry',
      name: 'absoluteEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'OrderEntry',
      name: 'orderEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'OrderRowID',
      name: 'orderRowId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PickedQuantity',
      name: 'pickedQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PickStatus',
      name: 'pickStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ReleasedQuantity',
      name: 'releasedQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PreviouslyReleasedQuantity',
      name: 'previouslyReleasedQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseObjectType',
      name: 'baseObjectType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SerialNumbers',
      name: 'serialNumbers',
      type: SerialNumber,
      isCollection: true
    },
    {
      originalName: 'BatchNumbers',
      name: 'batchNumbers',
      type: BatchNumber,
      isCollection: true
    },
    {
      originalName: 'DocumentLinesBinAllocations',
      name: 'documentLinesBinAllocations',
      type: DocumentLinesBinAllocation,
      isCollection: true
    }
  ];
}
