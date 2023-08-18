/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTransfers } from './EmployeeTransfers';
import { EmployeeTransfersRequestBuilder } from './EmployeeTransfersRequestBuilder';
import { EmployeeTransferDetail } from './EmployeeTransferDetail';
import { EmployeeTransferStatusEnum } from './EmployeeTransferStatusEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  Time,
  OrderableEdmTypeField,
  EnumField,
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class EmployeeTransfersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmployeeTransfers<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): EmployeeTransfersApi<DeSerializersT> {
    return new EmployeeTransfersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EmployeeTransfers;

  requestBuilder(): EmployeeTransfersRequestBuilder<DeSerializersT> {
    return new EmployeeTransfersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmployeeTransfers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmployeeTransfers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmployeeTransfers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof EmployeeTransfers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmployeeTransfers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TRANSFER_ID: OrderableEdmTypeField<
      EmployeeTransfers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANS_START_DATE: OrderableEdmTypeField<
      EmployeeTransfers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TRANS_START_TIME: OrderableEdmTypeField<
      EmployeeTransfers<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    TRANS_END_DATE: OrderableEdmTypeField<
      EmployeeTransfers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TRANS_END_TIME: OrderableEdmTypeField<
      EmployeeTransfers<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    STATUS: EnumField<
      EmployeeTransfers<DeSerializers>,
      DeSerializersT,
      EmployeeTransferStatusEnum,
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      EmployeeTransfers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_TRANSFER_DETAILS: CollectionField<
      EmployeeTransfers<DeSerializers>,
      DeSerializersT,
      EmployeeTransferDetail,
      true,
      true
    >;
    ALL_FIELDS: AllFields<EmployeeTransfers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link transferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ID: fieldBuilder.buildEdmTypeField(
          'TransferID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link transStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_START_DATE: fieldBuilder.buildEdmTypeField(
          'TransStartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link transStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_START_TIME: fieldBuilder.buildEdmTypeField(
          'TransStartTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link transEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_END_DATE: fieldBuilder.buildEdmTypeField(
          'TransEndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link transEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_END_TIME: fieldBuilder.buildEdmTypeField(
          'TransEndTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          EmployeeTransferStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link employeeTransferDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_TRANSFER_DETAILS: fieldBuilder.buildCollectionField(
          'EmployeeTransferDetails',
          EmployeeTransferDetail,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmployeeTransfers)
      };
    }

    return this._schema;
  }
}
