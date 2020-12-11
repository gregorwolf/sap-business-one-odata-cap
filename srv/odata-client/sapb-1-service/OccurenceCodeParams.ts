/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoBoeStatus } from './BoBoeStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * OccurenceCodeParams
 */
export interface OccurenceCodeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Note.
   * @nullable
   */
  note?: string;
  /**
   * Requested Boe Status.
   * @nullable
   */
  requestedBoeStatus?: BoBoeStatus;
  /**
   * Is Movement.
   * @nullable
   */
  isMovement?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[OccurenceCodeParams.build]] instead.
 */
export function createOccurenceCodeParams(json: any): OccurenceCodeParams {
  return OccurenceCodeParams.build(json);
}

/**
 * OccurenceCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class OccurenceCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, OccurenceCodeParams> {
  /**
   * Representation of the [[OccurenceCodeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[OccurenceCodeParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[OccurenceCodeParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
  /**
   * Representation of the [[OccurenceCodeParams.note]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  note: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Note', this, 'Edm.String');
  /**
   * Representation of the [[OccurenceCodeParams.requestedBoeStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requestedBoeStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('RequestedBoeStatus', this);
  /**
   * Representation of the [[OccurenceCodeParams.isMovement]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isMovement: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsMovement', this);

  /**
   * Creates an instance of OccurenceCodeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, OccurenceCodeParams);
  }
}

export namespace OccurenceCodeParams {
  /**
   * Metadata information on all properties of the `OccurenceCodeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<OccurenceCodeParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Note',
    name: 'note',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RequestedBoeStatus',
    name: 'requestedBoeStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'IsMovement',
    name: 'isMovement',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): OccurenceCodeParams {
    return deserializeComplexTypeV4(json, OccurenceCodeParams);
  }
}
