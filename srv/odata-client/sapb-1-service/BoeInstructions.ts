/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoeInstructionsRequestBuilder } from './BoeInstructionsRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BOEInstructions" of service "SAPB1".
 */
export class BoeInstructions extends EntityV4 implements BoeInstructionsType {
  /**
   * Technical entity name for BoeInstructions.
   */
  static _entityName = 'BOEInstructions';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Instruction Entry.
   * @nullable
   */
  instructionEntry?: number;
  /**
   * Instruction Code.
   * @nullable
   */
  instructionCode?: string;
  /**
   * Instruction Desc.
   * @nullable
   */
  instructionDesc?: string;
  /**
   * Is Cancel Instruction.
   * @nullable
   */
  isCancelInstruction?: BoYesNoEnum;

  /**
   * Returns an entity builder to construct instances of `BoeInstructions`.
   * @returns A builder that constructs instances of entity type `BoeInstructions`.
   */
  static builder(): EntityBuilderType<BoeInstructions, BoeInstructionsType> {
    return EntityV4.entityBuilder(BoeInstructions);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BoeInstructions` entity type.
   * @returns A `BoeInstructions` request builder.
   */
  static requestBuilder(): BoeInstructionsRequestBuilder {
    return new BoeInstructionsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BoeInstructions`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BoeInstructions`.
   */
  static customField(fieldName: string): CustomFieldV4<BoeInstructions> {
    return EntityV4.customFieldSelector(fieldName, BoeInstructions);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BoeInstructionsType {
  instructionEntry?: number | null;
  instructionCode?: string | null;
  instructionDesc?: string | null;
  isCancelInstruction?: BoYesNoEnum | null;
}

export namespace BoeInstructions {
  /**
   * Static representation of the [[instructionEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTRUCTION_ENTRY: NumberField<BoeInstructions> = new NumberField('InstructionEntry', BoeInstructions, 'Edm.Int32');
  /**
   * Static representation of the [[instructionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTRUCTION_CODE: StringField<BoeInstructions> = new StringField('InstructionCode', BoeInstructions, 'Edm.String');
  /**
   * Static representation of the [[instructionDesc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTRUCTION_DESC: StringField<BoeInstructions> = new StringField('InstructionDesc', BoeInstructions, 'Edm.String');
  /**
   * Static representation of the [[isCancelInstruction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_CANCEL_INSTRUCTION: EnumField<BoeInstructions> = new EnumField('IsCancelInstruction', BoeInstructions);
  /**
   * All fields of the BoeInstructions entity.
   */
  export const _allFields: Array<NumberField<BoeInstructions> | StringField<BoeInstructions> | EnumField<BoeInstructions>> = [
    BoeInstructions.INSTRUCTION_ENTRY,
    BoeInstructions.INSTRUCTION_CODE,
    BoeInstructions.INSTRUCTION_DESC,
    BoeInstructions.IS_CANCEL_INSTRUCTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BoeInstructions> = new AllFields('*', BoeInstructions);
  /**
   * All key fields of the BoeInstructions entity.
   */
  export const _keyFields: Array<Field<BoeInstructions>> = [BoeInstructions.INSTRUCTION_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property BoeInstructions.
   */
  export const _keys: { [keys: string]: Field<BoeInstructions> } = BoeInstructions._keyFields.reduce((acc: { [keys: string]: Field<BoeInstructions> }, field: Field<BoeInstructions>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
