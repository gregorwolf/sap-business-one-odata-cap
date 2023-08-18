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
 * EmployeePreviousEmpoymentInfo
 */
export interface EmployeePreviousEmpoymentInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Employee No.
   * @nullable
   */
  employeeNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * From Dtae.
   * @nullable
   */
  fromDtae?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   * @nullable
   */
  toDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Employer.
   * @nullable
   */
  employer?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Position.
   * @nullable
   */
  position?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EmployeePreviousEmpoymentInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeePreviousEmpoymentInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmployeePreviousEmpoymentInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmployeePreviousEmpoymentInfo.employeeNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EmployeeNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeePreviousEmpoymentInfo.lineNum} property for query construction.
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
   * Representation of the {@link EmployeePreviousEmpoymentInfo.fromDtae} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDtae: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FromDtae',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EmployeePreviousEmpoymentInfo.toDate} property for query construction.
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
   * Representation of the {@link EmployeePreviousEmpoymentInfo.employer} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employer: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Employer', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeePreviousEmpoymentInfo.position} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  position: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Position', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeePreviousEmpoymentInfo.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);

  /**
   * Creates an instance of EmployeePreviousEmpoymentInfoField.
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
      EmployeePreviousEmpoymentInfo,
      fieldOptions
    );
  }
}

export namespace EmployeePreviousEmpoymentInfo {
  /**
   * Metadata information on all properties of the `EmployeePreviousEmpoymentInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeePreviousEmpoymentInfo>[] =
    [
      {
        originalName: 'EmployeeNo',
        name: 'employeeNo',
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
        originalName: 'FromDtae',
        name: 'fromDtae',
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
        originalName: 'Employer',
        name: 'employer',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Position',
        name: 'position',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Remarks',
        name: 'remarks',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
