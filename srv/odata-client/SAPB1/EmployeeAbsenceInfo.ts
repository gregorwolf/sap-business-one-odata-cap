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
 * EmployeeAbsenceInfo
 */
export interface EmployeeAbsenceInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * From Date.
   * @nullable
   */
  fromDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   * @nullable
   */
  toDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Reason.
   * @nullable
   */
  reason?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Approved By.
   * @nullable
   */
  approvedBy?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Confirmer Number.
   * @nullable
   */
  confirmerNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * EmployeeAbsenceInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeAbsenceInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmployeeAbsenceInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmployeeAbsenceInfo.employeeId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EmployeeID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeAbsenceInfo.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeAbsenceInfo.fromDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FromDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EmployeeAbsenceInfo.toDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ToDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EmployeeAbsenceInfo.reason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reason: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Reason', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeAbsenceInfo.approvedBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvedBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ApprovedBy', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeAbsenceInfo.confirmerNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  confirmerNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ConfirmerNumber',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of EmployeeAbsenceInfoField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EmployeeAbsenceInfo, fieldOptions);
  }
}

export namespace EmployeeAbsenceInfo {
  /**
   * Metadata information on all properties of the `EmployeeAbsenceInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeAbsenceInfo>[] = [
    {
      originalName: 'EmployeeID',
      name: 'employeeId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FromDate',
      name: 'fromDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ToDate',
      name: 'toDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Reason',
      name: 'reason',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ApprovedBy',
      name: 'approvedBy',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ConfirmerNumber',
      name: 'confirmerNumber',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
