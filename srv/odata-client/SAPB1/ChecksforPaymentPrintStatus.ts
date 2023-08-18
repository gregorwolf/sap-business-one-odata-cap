/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * ChecksforPaymentPrintStatus
 */
export interface ChecksforPaymentPrintStatus<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Check Number.
   * @nullable
   */
  checkNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Print Status.
   * @nullable
   */
  printStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Printed By.
   * @nullable
   */
  printedBy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ChecksforPaymentPrintStatusField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChecksforPaymentPrintStatusField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ChecksforPaymentPrintStatus,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ChecksforPaymentPrintStatus.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ChecksforPaymentPrintStatus.lineNumber} property for query construction.
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
   * Representation of the {@link ChecksforPaymentPrintStatus.checkNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ChecksforPaymentPrintStatus.printStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PrintStatus', 'Edm.String', true);
  /**
   * Representation of the {@link ChecksforPaymentPrintStatus.printedBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printedBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PrintedBy', 'Edm.Int32', true);

  /**
   * Creates an instance of ChecksforPaymentPrintStatusField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      ChecksforPaymentPrintStatus,
      fieldOptions
    );
  }
}

export namespace ChecksforPaymentPrintStatus {
  /**
   * Metadata information on all properties of the `ChecksforPaymentPrintStatus` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChecksforPaymentPrintStatus>[] =
    [
      {
        originalName: 'DocEntry',
        name: 'docEntry',
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
        originalName: 'CheckNumber',
        name: 'checkNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PrintStatus',
        name: 'printStatus',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'PrintedBy',
        name: 'printedBy',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
